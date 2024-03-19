import { Response } from "express";
import MESSAGE from '../helper/message';
export const sendErrorResponse = (error: any, res: Response) => {
    if (error?.status && error.message) {
        res.status(error.status).json({ status: MESSAGE.Failed, error: error.message });
    } else {
        res.status(500).json({ status: MESSAGE.Failed, error: MESSAGE.INTERNAL_SERVER_ERROR });
    }
};

export const sendSuccessResponse = (res: Response, OK: any, message: string, data?: any) => {
    const response = {
        status: OK,
        message: message,
        data: data
    };
    res.status(200).send(response);
};