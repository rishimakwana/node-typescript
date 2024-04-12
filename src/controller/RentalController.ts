import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import Rental from '../models/RentalSchema';
import { createEntity, deleteEntityById, getAllEntity, getEntityById, updateEntity } from '../helper/commonServices';

export const RentalController = {
    getAllRentals: async (req: any, res: any) => {
        try {
            const rentals = await getAllEntity(Rental);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, rentals);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    createRental: async (req: any, res: any) => {
        try {
            const data = req.body;
            const entity = await createEntity(Rental, data);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.RENTAL_CREATED, entity);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    getRentalById: async (req: any, res: any) => {
        try {

            const { rentalId } = req.params;
            const rental = await getEntityById(Rental, rentalId, MESSAGE.RENTAL_NOT_FOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, rental);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updateRental: async (req: any, res: any) => {
        try {
            const data = req.body;
            const { rentalId } = req.params;
            const updatedRental = await updateEntity(Rental, rentalId, data, MESSAGE.RENTAL_NOT_FOUND)
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.RENTAL_UPDATED, updatedRental);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deleteRental: async (req: any, res: any) => {
        try {
            const { rentalId } = req.params;
            await deleteEntityById(Rental, rentalId, MESSAGE.RENTAL_NOT_FOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.RENTAL_DELETED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
};
