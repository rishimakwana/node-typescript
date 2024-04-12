import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity, deleteEntityById, getAllEntity, updateEntity } from '../helper/commonServices';
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
            const tripPackages = await getAllEntity(Package);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, tripPackages);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updatePackage: async (req: any, res: any) => {
        try {
            const { tripPackageId } = req.params;
            const data = req.body;
            const updatedRental = await updateEntity(Package, tripPackageId, data, MESSAGE.PACKAGE_NOTFOUND)
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PACKAGE_UPDATED, updatedRental);

        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deletePackage: async (req: any, res: any) => {
        try {
            const { tripPackageId } = req.params;
            await deleteEntityById(Package, tripPackageId, MESSAGE.PACKAGE_NOTFOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PACKAGE_DELETED);

        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
};
