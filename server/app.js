import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Razarpay from "razorpay";

const app = express();

dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "XXXXXXXXXXXXXXXXXXXXX",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());



export const instance = new Razarpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})


// Importing Routes
import userRoutes from "./routes/user.route.js";
import productRoutes from  "./routes/product.route.js";
import orderRoutes from "./routes/order.route.js";
import paymentRoutes from "./routes/payment.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;