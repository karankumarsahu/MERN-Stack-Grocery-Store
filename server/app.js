import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "XXXXXXXXXXXXXXXXXXXXX",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET,POST,PUT,DELETE,PATCH"
}))

// app.use(session({
//     secret: process.env.SESSION_SECRET || "XXXXXXXXXXXXXXXXXXXXX",
//     resave: false,
//     saveUninitialized: false,
// }))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


// Importing Routes
import userRoutes from "./routes/user.route.js";
import productRoutes from  "./routes/product.route.js";

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

export default app;