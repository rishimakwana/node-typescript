import express from 'express';
const router = express.Router();
import { AdminController } from '../../controller/AdminController';
import { verifyToken } from '../../middleware/authentication';

router.get('/getOne/:id',verifyToken, AdminController.getOneUser);
router.post('/getAll', verifyToken, AdminController.getAllUsers);
router.put('/updateProfile',verifyToken, AdminController.updateProfile);
router.delete('/deleteUser',verifyToken, AdminController.deleteUser);

export default router;