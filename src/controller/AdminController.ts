import { getAllUsers } from '../services/UserService';
import { findUserById, updateUser } from '../services/UserService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';

//super admin
export const AdminController = {
    getAllUsers: async (req: any, res: any) => {
        try {
            const allUsers = await getAllUsers();
            return res.status(200).json({ success: true, users: allUsers });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    getOneUser: async (req: any, res: any) => {
        try {
            const userId = req.body.userId;
            const user = await findUserById(userId);
            if (!user) {
                throw { status: 404, message: MESSAGE.USER_NOT_FOUND };
            }
            return sendSuccessResponse(res, MESSAGE.OK, MESSAGE.Success, user);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updateProfile: async (req: any, res: any) => {
        try {
            const data = req.body.userId;
            const user = await findUserById(data.userId);

            if (!user) {
                return res.status(404).json({ error: MESSAGE.USER_NOT_FOUND });
            }

            if (req.file) {
                data.profilePicture = req.file.path;
            }

            const updateResult:any = await updateUser(data.userId, data);

            if (updateResult.nModified === 0) {
                throw { status: 400, message: MESSAGE.NO_CHANGES };
            }

            return sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PROFILE_UPDATED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deleteUser: async (req: any, res: any) => {
        try {
            const userId = req.body.userId;
            const user = await findUserById(userId);

            if (!user) {
                return sendErrorResponse({ status: 404, message: MESSAGE.USER_NOT_FOUND }, res);
            }

            user.isDeleted = true;
            await user.save();

            return sendSuccessResponse(res, MESSAGE.OK, MESSAGE.USER_DELETED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
};