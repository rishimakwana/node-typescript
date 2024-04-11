import { paymentService } from '../services/PaymentService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity } from '../helper/commonServices';
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
            console.log(req.userData,"req.userData-****");
            
            const userId = req.userData.userId;
            const payments = await paymentService.getPaymentsByUser(userId);
            res.status(200).json({
                success: true,
                payments,
            });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
};
