import Payment from '../models/PaymentSchema';

export const paymentService = {
    makePayment: async (userId: string, amount: number, paymentDate: any) => {
        const payment = new Payment({ userId, amount, paymentDate });
        return await payment.save();
    },

    getPaymentsByUser: async (userId: string) => {
        return await Payment.find({ userId });
    }
};
