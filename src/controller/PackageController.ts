import { packageService } from '../services/PackageService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity } from '../helper/commonServices';
import Package from '../models/PackageSchema';

export const PackageController = {
    createPackage: async (req: any, res: any) => {
        try {
            const data = req.body;
            const entity = await createEntity(Package, data);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PACKAGE_CREATED, entity);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    getAllPackages: async (req: any, res: any) => {
        try {
            const tripPackages = await packageService.getPackages();
            res.status(200).json({ data: tripPackages });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updatePackage: async (req: any, res: any) => {
        try {
            const { tripPackageId } = req.params;
            const { name, description, destination, days, price } = req.body;
            const updatedPackage = await packageService.updatePackage(tripPackageId, name, description, destination, days, price);
            if (!updatedPackage) {
                throw { status: 404, message: MESSAGE.PACKAGE_NOTFOUND };
            }
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PACKAGE_UPDATED, updatedPackage);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deletePackage: async (req: any, res: any) => {
        try {
            const { tripPackageId } = req.params;
            const deletedPackage = await packageService.deletePackage(tripPackageId);
            if (!deletedPackage) {
                throw { status: 404, message: MESSAGE.PACKAGE_NOTFOUND };
            }
            res.status(200).json({ message: MESSAGE.PACKAGE_DELETED });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
};
