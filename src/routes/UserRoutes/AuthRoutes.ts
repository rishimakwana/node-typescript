import express from 'express';
import { Authcontroller } from '../../controller/AuthController';
import { limiter } from "../../middleware/rateLimit";
import { passwordValidationRules, emailValidationRules } from '../../validators/userValidator';
import validate  from '../../validators/validate';

// Combined validation rule for email and password
const emailAndPasswordValidationRules = [
    ...emailValidationRules,
    ...passwordValidationRules
];

const router = express.Router();
router.post('/signup', emailAndPasswordValidationRules, validate, Authcontroller.signup);
router.post('/login', emailAndPasswordValidationRules, validate, Authcontroller.login);
router.post('/request-password-reset', emailValidationRules, validate, limiter, Authcontroller.requestPasswordReset);
router.post('/reset-password/:resetToken', emailValidationRules, validate, Authcontroller.resetPassword);

export default router;