import express from 'express';
import { Authcontroller } from '../../controller/AuthController';
import { validateEmail, validateEmailAndPassword } from '../../middleware/validation';
import { limiter } from "../../middleware/rateLimit";
import { emailAndPasswordValidationRules, emailValidationRules } from '../../validators/userValidator';
import { validate } from 'uuid';

const router = express.Router();
router.post('/signup', emailAndPasswordValidationRules, validate, Authcontroller.signup);
router.post('/login', emailAndPasswordValidationRules, validate, Authcontroller.login);
router.post('/request-password-reset', emailValidationRules, validate, limiter, Authcontroller.requestPasswordReset);
router.post('/reset-password/:resetToken', emailValidationRules, validate, Authcontroller.resetPassword);

export default router;