import express from "express";
import { checkout, paymentVerification } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/razorpay", checkout)

router.post("/paymentverification", paymentVerification)

export default router