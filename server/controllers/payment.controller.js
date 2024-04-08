import { instance } from "../app.js";
import { Payment } from "../models/payment.model.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount) * 100,
        currency: "INR",
    };

    const order = await instance.orders.create(options);


    res.status(200).json({ order: order , key: process.env.RAZORPAY_KEY_ID });
}

export const paymentVerification = async (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(sign.toString()).digest("hex");

    if (razorpay_signature === expectedSign) {

        const payment = await Payment.create({ razorpay_order_id, razorpay_payment_id, razorpay_signature });

        res.redirect(`${process.env.CLIENT_URL}/success?reference=${razorpay_payment_id}`);
    }

    else{
        return res.status(400).json({ success: false });
    }
}