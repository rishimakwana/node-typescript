import express from 'express';
const router = express.Router();
import { AdminController } from '../../controller/AdminController';
import { verifyToken } from '../../middleware/authentication';

router.get('/getAll', verifyToken, AdminController.getAllUsers);
router.get('/getOne',verifyToken, AdminController.getOneUser);
router.put('/updateProfile',verifyToken, AdminController.updateProfile);
router.delete('/deleteUser',verifyToken, AdminController.deleteUser);

export default router;