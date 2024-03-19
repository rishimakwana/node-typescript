import { paymentService } from '../services/PaymentService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';

export const PaymentController = {
    makePayment: async (req: any, res: any) => {
        try {
            const userId = req.userData.userId;
            const { amount } = req.body;
            const payment = await paymentService.makePayment(userId, amount);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.PAYMENT_SUCCESS, payment);
        } catch (error: any) {
            sendErrorResponse(error, res);
        }
    },

    getPaymentsByUser: async (req: any, res: any) => {
        try {
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
