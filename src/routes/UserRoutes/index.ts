import express from "express";
const router = express.Router();
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);

export default router;
