import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { findUserById, updateUser } from '../services/UserService';
import { blogService } from '../services/BlogService';
import { packageService } from '../services/PackageService';
import { policyService } from '../services/PolicyService';
import { rentalService } from '../services/RentalService';

export const Usercontroller = {
    getProfile: async (req: any, res: any) => {
        try {
            const userId = req.userData.userId
            const userData = await findUserById(userId);

            if (!userData) {
                throw { status: 404, message: MESSAGE.USER_NOT_FOUND };
            }
            return res.status(200).json({ message: true, userData });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    updateProfile: async (req: any, res: any) => {
        try {
            const data = req.body;
            const userId = req.userData.userId
            const user = await findUserById(userId);
            if (!user) {
                return res.status(404).json({ error: MESSAGE.USER_NOT_FOUND });
            }
            delete data.role;
            delete data.isActive;
            delete data.createdAt;

            if (req.file) {
                data.profilePicture = req.file.path;
            }

            const updateResult: any = await updateUser(userId, data);

            if (updateResult.nModified === 0) {
                throw { status: 400, message: MESSAGE.NO_CHANGES };
            }

            return res.status(200).json({ message: MESSAGE.PROFILE_UPDATED });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    deleteUser: async (req: any, res: any) => {
        try {
            const userId = req.userData.userId;
            const user = await findUserById(userId);
            if (!user) {
                return res.status(404).json({ error: MESSAGE.USER_NOT_FOUND });
            }
            user.isDeleted = true;
            await user.save();

            return res.status(200).json({ message: MESSAGE.USER_DELETED });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    //get blogs
    getBlogs: async (req: any, res: any) => {
        try {
            const blogs = await blogService.getBlogs();
            res.status(200).json({ data: blogs });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    // package
    getPackages: async (req: any, res: any) => {
        try {
            const tripPackages = await packageService.getPackages();
            res.status(200).json({ data: tripPackages });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    // policy
    getPolicyById: async (req: any, res: any) => {
        const _id = req.params.id;

        try {
            const policy = await policyService.getPolicyById(_id);
            if (!policy) {
                throw { status: 404, message: MESSAGE.POLICY_NOTFOUND };
            }
            res.send(policy);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    //rental
    getRentalById: async (req: any, res: any) => {
        const rentalId = req.params.rentalId;
        try {
            const rental = await rentalService.getRentalById(rentalId);
            if (!rental) {
                throw { status: 404, message: MESSAGE.RENTAL_NOT_FOUND };
            }
            res.status(200).json({ success: true, rental });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

}