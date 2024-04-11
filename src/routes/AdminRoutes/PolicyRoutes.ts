import express from 'express';
import { PolicyController } from '../../controller/PolicyController';
const router = express.Router();
import { verifyToken } from '../../middleware/authentication';
import { policyValidationRules } from '../../validators/policyValidator';
import validate from '../../validators/validate';

router.post('/', verifyToken, policyValidationRules, validate, PolicyController.createPolicy);
router.get('/', verifyToken, PolicyController.getAllPolicies);
router.get('/:id', verifyToken, PolicyController.getPolicyById);
router.patch('/:id', verifyToken, policyValidationRules, validate, PolicyController.updatePolicyById);
router.delete('/:id', verifyToken, PolicyController.deletePolicyById);

export default router;