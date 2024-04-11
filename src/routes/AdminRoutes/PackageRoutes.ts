import express from "express";
const router = express.Router();
import { PackageController } from '../../controller/PackageController';
import { verifyToken } from '../../middleware/authentication';
import { packageValidationRules } from "../../validators/packageValidator";
import validate from "../../validators/validate";

router.post('/', verifyToken, packageValidationRules, validate, PackageController.createPackage);
router.get('/', verifyToken, PackageController.getAllPackages);
router.put('/:tripPackageId', verifyToken, packageValidationRules, validate, PackageController.updatePackage);
router.delete('/:tripPackageId', verifyToken, PackageController.deletePackage);

export default router;