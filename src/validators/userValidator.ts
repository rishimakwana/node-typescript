import { body } from 'express-validator';
import MESSAGE from '../helper/message';

export const signupValidationRules = [
    body('email')
        .notEmpty().withMessage(MESSAGE.EMAIL_REQR)
        .isEmail().withMessage(MESSAGE.INVALID_EMAIL),
    body('password')
        .notEmpty().withMessage(MESSAGE.PASSWORD)
        .isLength({ min: 6 }).withMessage(MESSAGE.INVALID_PASS_LENGTH),
    body('phone')
        .notEmpty().withMessage(MESSAGE.PHONE_REQR)
        .isMobilePhone('any', { strictMode: false }).withMessage(MESSAGE.INVALID_PHONE),

    body('name')
        .notEmpty().withMessage(MESSAGE.NAME_REQR)
];
export const loginValidationRules = [
    body('email')
        .notEmpty().withMessage(MESSAGE.EMAIL_REQR)
        .isEmail().withMessage(MESSAGE.INVALID_EMAIL),
    body('password')
        .notEmpty().withMessage(MESSAGE.PASSWORD)
];
export const resetPaswordRules = [
    body('email')
        .notEmpty().withMessage(MESSAGE.EMAIL_REQR)
        .isEmail().withMessage(MESSAGE.INVALID_EMAIL)
];
export const resetPasswordTokenRules = [
    body('password')
        .notEmpty().withMessage(MESSAGE.PASSWORD)
];