import { rentalService } from '../services/RentalService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import Rental from '../models/RentalSchema';
import { createEntity } from '../helper/commonServices';

export const RentalController = {
    getAllRentals: async (req: any, res: any) => {
        try {
            const rentals = await rentalService.getAllRentals();
            res.status(200).json({ success: true, rentals });
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
            const rental = await rentalService.getRentalById(req.params.rentalId);
            if (!rental) {
                throw { status: 404, message: MESSAGE.RENTAL_NOT_FOUND };
            }
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, rental);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updateRental: async (req: any, res: any) => {
        const rentalId = req.params.rentalId;
        const { name, description, location, pricePerDay } = req.body;

        try {
            const updatedRental = await rentalService.updateRental(rentalId, name, description, location, pricePerDay);
            if (!updatedRental) {
                throw { status: 404, message: MESSAGE.RENTAL_NOT_FOUND };
            }
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.RENTAL_UPDATED, updatedRental);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deleteRental: async (req: any, res: any) => {
        const rentalId = req.params.rentalId;

        try {
            const deletedRental = await rentalService.deleteRental(rentalId);
            if (!deletedRental) {
                throw { status: 404, message: MESSAGE.RENTAL_NOT_FOUND };
            }
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.RENTAL_DELETED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
};
