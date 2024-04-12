import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { findUserById, updateUser } from '../services/UserService';
import { getAllEntity, getEntityById } from '../services/commonServices';
import Blog from '../models/BlogSchema';
import Package from '../models/PackageSchema';
import Policy from '../models/PolicySchema';
import Rental from '../models/RentalSchema';

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
            const blogs = await getAllEntity(Blog);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, blogs);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    // package
    getPackages: async (req: any, res: any) => {
        try {
            const tripPackages = await getAllEntity(Package);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, tripPackages);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    // policy
    getPolicyById: async (req: any, res: any) => {
        try {
            const { id } = req.params;
            const policy = await getEntityById(Policy, id, MESSAGE.POLICY_NOTFOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, policy);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    //rental
    getRentalById: async (req: any, res: any) => {
        try {
            const { rentalId } = req.params;
            const rental = await getEntityById(Rental, rentalId, MESSAGE.RENTAL_NOT_FOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, rental);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

}