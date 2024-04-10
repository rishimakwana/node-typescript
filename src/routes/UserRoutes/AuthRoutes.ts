import express from 'express';
import { Authcontroller } from '../../controller/AuthController';
import { limiter } from "../../middleware/rateLimit";
import { loginValidationRules, resetPasswordTokenRules, resetPaswordRules, signupValidationRules } from '../../validators/userValidator';
import validate  from '../../validators/validate';

const router = express.Router();
router.post('/signup', signupValidationRules, validate, Authcontroller.signup);
router.post('/login', loginValidationRules, validate, Authcontroller.login);
router.post('/request-password-reset', resetPaswordRules, validate, limiter, Authcontroller.requestPasswordReset);
router.post('/reset-password/:resetToken', resetPasswordTokenRules, validate, Authcontroller.resetPassword);

export default router;