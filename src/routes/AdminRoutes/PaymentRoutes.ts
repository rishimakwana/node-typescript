import express from 'express';
const router = express.Router();
import { paymentValidationRules } from '../../validators/paymentValidator';
import { PaymentController } from "../../controller/PaymentController";
import validate from '../../validators/validate';
import { verifyToken } from '../../middleware/authentication';

router.post('/process-payment', paymentValidationRules, validate, verifyToken, PaymentController.makePayment);
router.get('/getpayment', validate, verifyToken, PaymentController.getPaymentsByUser);

export default router;