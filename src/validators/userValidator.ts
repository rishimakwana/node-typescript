import { body } from 'express-validator';
import MESSAGE from '../helper/message';

export const emailValidationRules = [
    body('email').notEmpty().withMessage(MESSAGE.EMAIL_REQR)
        .isEmail().withMessage(MESSAGE.INVALID_EMAIL)
];

export const passwordValidationRules = [
    body('password').notEmpty().withMessage(MESSAGE.PASSWORD)
        .isLength({ min: 6 }).withMessage(MESSAGE.INVALID_PASS_LENGTH)
];

// export const emailAndPasswordValidationRules = [
//     ...emailValidationRules,
//     ...passwordValidationRules
// ];