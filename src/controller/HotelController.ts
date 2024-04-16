// controllers/hotelController.js
import Hotel from "../models/HotelSchema";
import MESSAGE from "../helper/message";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responder";
import { createEntity, deleteEntityById, getAllEntity, getEntityById, updateEntity } from "../services/commonServices";

export const createHotel = async (req: any, res: any) => {
    try {
        const data = req.body;
        const hotel = await createEntity(Hotel, data);
        sendSuccessResponse(res, MESSAGE.OK, MESSAGE.HOTEL_CREATED, hotel);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const getAllHotels = async (req: any, res: any) => {
    try {
        const hotels = await getAllEntity(Hotel);
        sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, hotels);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const getHotelById = async (req: any, res: any) => {
    try {
        const { hotelId } = req.params;
        const hotel = await getEntityById(Hotel, hotelId, MESSAGE.HOTEL_NOT_FOUND);
        sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, hotel);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const updateHotel = async (req: any, res: any) => {
    try {
        const { hotelId } = req.params;
        const data = req.body;
        const updatedHotel = await updateEntity(Hotel, hotelId, data, MESSAGE.HOTEL_NOT_FOUND);
        sendSuccessResponse(res, MESSAGE.OK, MESSAGE.HOTEL_UPDATED, updatedHotel);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const deleteHotel = async (req: any, res: any) => {
    try {
        const { hotelId } = req.params;
        await deleteEntityById(Hotel, hotelId, MESSAGE.HOTEL_NOT_FOUND);
        sendSuccessResponse(res, MESSAGE.OK, MESSAGE.HOTEL_DELETED);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};
