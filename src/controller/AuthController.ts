import User from '../models/UserSchema';
import { encryptPass, bycryptPass } from '../helper/common';
import { sendEmail } from '../utils/mailer';
import MESSAGE from '../helper/message';
import { createToken } from '../middleware/authentication';
import { v4 as uuidv4 } from 'uuid';
import { findByEmail, findByResetToken, findByVerificationToken } from '../services/UserService';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';

export const Authcontroller = {
    signup: async (req: any, res: any) => {
        try {
            const { email, password, name } = req.body;
            const existingUser = await findByEmail(email);
            if (existingUser) {
                throw { status: 400, message: MESSAGE.EMAIL_ALREADY_EXISTS };
            }

            const encryptedPassword = await encryptPass(password);
            let newUser = new User({
                email,
                password: encryptedPassword,
                name: name || '',
            });


            //enable if verification of email requires
            // const verificationToken = uuidv4();
            // const expiration = new Date(Date.now() + 10 * 60 * 1000);
            // newUser.verificationToken = verificationToken;
            // newUser.tokenExpiration = expiration;

            const user = await newUser.save();
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.SIGNUPSUCCESS, user);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    login: async (req: any, res: any) => {
        try {
            const { email, password } = req.body;
            const user = await findByEmail(email);

            if (!user) {
                throw { status: 400, message: MESSAGE.USER_NOT_FOUND };
            }

            const isPasswordValid = await bycryptPass(password, user.password);
            if (!isPasswordValid) {
                throw { status: 400, message: MESSAGE.INVALID_EMAIL_PWD };
            }

            const token = await createToken(user.email, user._id);

            return res.status(200).json({ success: true, user, token });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    requestPasswordReset: async (req: any, res: any) => {
        try {
            const { email } = req.body;
            const user = await findByEmail(email);

            if (!user) {
                throw { status: 400, message: MESSAGE.USER_NOT_FOUND };
            }

            const resetToken = uuidv4();
            const expiration = new Date(Date.now() + 10 * 60 * 1000);

            user.resetToken = resetToken;
            user.tokenExpiration = expiration;
            await user.save();

            const resetLink = `http://localhost:8000/api/auth/reset-password/${resetToken}`;
            await sendEmail(user.email, resetLink, 'Password Reset Request');

            return res.status(200).json({ success: true, message: MESSAGE.PASSWORD_RESET_REQUEST });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    resetPassword: async (req: any, res: any) => {
        try {
            const { password } = req.body;
            const { resetToken } = req.params;

            if (!password || !resetToken) {
                throw { status: 400, message: MESSAGE.PASS_REQ_RESET_TOKEN };
            }
            const user:any = await findByResetToken(resetToken);

            if (!user) {
                throw { status: 404, message: MESSAGE.INVALID_RESET_TOKEN };
            }

            const currentTimestamp = Date.now();
            if (user.tokenExpiration && user.tokenExpiration < currentTimestamp) {
                return res.status(400).json({ error: MESSAGE.EXPIRED_RESET_TOKEN });
            }

            user.resetToken = null;
            user.tokenExpiration = null;
            await user.save();

            return res.status(200).json({ success: true, message: MESSAGE.PASSWORD_RESET_SUCCESS });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    verifyEmail: async (req: any, res: any) => {
        try {
            const { verificationToken } = req.params;

            if (!verificationToken) {
                throw { status: 400, message: MESSAGE.VERIFICATION_TOKEN_MISSING };
            }

            const user = await findByVerificationToken(verificationToken);

            if (!user) {
                throw { status: 404, message: MESSAGE.INVALID_VERIFICATION_TOKEN };
            }

            if (user.isActive) {
                throw { status: 400, message: MESSAGE.ALREADY_VERIFIED };
            }

            user.isActive = true;
            await user.save();

            return res.status(200).json({ success: true, message: MESSAGE.EMAIL_VERIFIED });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
};