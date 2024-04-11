import { body } from 'express-validator';
import MESSAGE from '../helper/message';

export const packageValidationRules = [
    body('name')
        .notEmpty().withMessage(MESSAGE.NAME_REQR)
        .isString().withMessage(MESSAGE.INVALID_NAME),
    body('description')
        .notEmpty().withMessage(MESSAGE.DESCRIPTION_REQR)
        .isString().withMessage(MESSAGE.INVALID_DESCRIPTION),
    body('price')
        .notEmpty().withMessage(MESSAGE.PRICE_REQR)
        .isNumeric().withMessage(MESSAGE.INVALID_PRICE),
    body('destination')
        .notEmpty().withMessage(MESSAGE.DESTINATION_REQR)
        .isString().withMessage(MESSAGE.INVALID_DESTINATION),
    body('days')
        .notEmpty().withMessage(MESSAGE.DAYS_REQR)
        .isNumeric().withMessage(MESSAGE.INVALID_DAYS)
];
