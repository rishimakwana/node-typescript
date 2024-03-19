import { body } from 'express-validator';
import MESSAGE from '../helper/message';


export const paymentValidationRules = [
    body('amount').isNumeric().withMessage(MESSAGE.AMOUNT_MUST_NUMERIC),
];