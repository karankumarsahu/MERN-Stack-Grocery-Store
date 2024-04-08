import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createOrder, getOrderById, getOrders, updateOrder } from "../controllers/order.controller.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.post("/create", verifyToken, createOrder)

router.get("/all", verifyToken, verifyAdmin, getOrders)

router.get("/:id", verifyToken, getOrderById)

router.put("/:id", verifyToken, verifyAdmin, updateOrder)


export default router