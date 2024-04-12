import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity, getAllEntity } from '../services/commonServices';
import Payment from '../models/PaymentSchema';

export const PaymentController = {
    makePayment: async (req: any, res: any) => {
        try {
            const data = req.body;
            data.userId = req.userData.userId;
            data.paymentDate = new Date()
            const entity = await createEntity(Payment, data);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PAYMENT_SUCCESS, entity);
        } catch (error: any) {
            sendErrorResponse(error, res);
        }
    },

    getPaymentsByUser: async (req: any, res: any) => {
        try {
            const { userId } = req.userData;

            const payments = await getAllEntity(Payment, { userId });
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, payments);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
};
