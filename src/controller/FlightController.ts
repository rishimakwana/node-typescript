// controllers/flightController.js
import Flight from "../models/FlightSchema";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responder";
import { createEntity, deleteEntityById, getAllEntity, getEntityById, updateEntity } from "../services/commonServices";
import MESSAGE from "../helper/message";

export const createFlight = async (req: any, res: any) => {
    try {
        const data = req.body;
        const flight = await createEntity(Flight, data);
        sendSuccessResponse(res, MESSAGE.FLIGHT_CREATED, flight);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const getAllFlights = async (req: any, res: any) => {
    try {
        const flights = await getAllEntity(Flight);
        sendSuccessResponse(res, MESSAGE.FETCH_DATA_SUCCESSFULLY, flights);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const getFlightById = async (req: any, res: any) => {
    try {
        const { flightId } = req.params;
        const flight = await getEntityById(Flight, flightId, MESSAGE.FLIGHT_NOT_FOUND);
        sendSuccessResponse(res, MESSAGE.FETCH_DATA_SUCCESSFULLY, flight);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const updateFlight = async (req: any, res: any) => {
    try {
        const { flightId } = req.params;
        const data = req.body;
        const updatedFlight = await updateEntity(Flight, flightId, data, MESSAGE.FLIGHT_NOT_FOUND);
        sendSuccessResponse(res, MESSAGE.FLIGHT_UPDATED, updatedFlight);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};

export const deleteFlight = async (req: any, res: any) => {
    try {
        const { flightId } = req.params;
        await deleteEntityById(Flight, flightId, MESSAGE.FLIGHT_NOT_FOUND);
        sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FLIGHT_DELETED);
    } catch (error) {
        sendErrorResponse(error, res);
    }
};
