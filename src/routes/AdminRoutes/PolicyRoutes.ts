import express from 'express';
import { PolicyController } from '../../controller/PolicyController';
const router = express.Router();
import { verifyToken } from '../../middleware/authentication';

router.post('/policies',verifyToken,  PolicyController.createPolicy);
router.get('/policies', verifyToken, PolicyController.getAllPolicies);
router.get('/policies/:id', verifyToken, PolicyController.getPolicyById);
router.patch('/policies/:id', verifyToken, PolicyController.updatePolicyById);
router.delete('/policies/:id', verifyToken, PolicyController.deletePolicyById);

export default router;