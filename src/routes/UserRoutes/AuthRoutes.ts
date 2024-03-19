import express from 'express';
import { Authcontroller } from '../../controller/AuthController';
import { validateEmail, validateEmailAndPassword } from '../../middleware/validation';
import { limiter } from "../../middleware/rateLimit";

const router = express.Router();
router.post('/signup', validateEmailAndPassword, Authcontroller.signup);
router.post('/login', validateEmailAndPassword, Authcontroller.login);
router.post('/request-password-reset', validateEmail, limiter, Authcontroller.requestPasswordReset);
router.post('/reset-password/:resetToken', Authcontroller.resetPassword);

export default router;