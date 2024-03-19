import express from "express";
const router = express.Router();

import RentalRoutes from "./RentalRoutes";
import BlogRoutes from "./BlogRoutes";
import PolicyRoutes from "./PolicyRoutes";
import PaymentRoutes from "./PaymentRoutes";
import PackageRoutes from "./PackageRoutes";
import UserManagementRoutes from "./UserManagementRoutes";


router.use("/rental", RentalRoutes);
router.use("/blogs", BlogRoutes);
router.use("/policy", PolicyRoutes);
router.use("/payment", PaymentRoutes);
router.use("/package", PackageRoutes);
router.use("/", UserManagementRoutes);

export default router;
