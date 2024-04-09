import express from "express";
import { dashboardStats } from "../controllers/dashboard.controller.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/stats", verifyToken, verifyAdmin, dashboardStats)

export default router;