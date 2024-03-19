import Payment from '../models/PaymentSchema';

export const paymentService = {
    makePayment: async (userId: string, amount: number) => {
        const payment = new Payment({ userId, amount });
        return await payment.save();
    },

    getPaymentsByUser: async (userId: string) => {
        return await Payment.find({ userId });
    }
};
