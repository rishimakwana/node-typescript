import express from "express";
const router = express.Router();
import { PackageController } from '../../controller/PackageController';
import { verifyToken } from '../../middleware/authentication';

router.post('/createPackage', verifyToken, PackageController.createPackage);
router.get('/getPackages', verifyToken, PackageController.getAllPackages);
router.put('/updatePackage/:tripPackageId', verifyToken, PackageController.updatePackage);
router.delete('/deletePackage/:tripPackageId', verifyToken, PackageController.deletePackage);

export default router;