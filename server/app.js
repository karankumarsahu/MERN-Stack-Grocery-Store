import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as session from 'express-session';

const app = express();

dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "XXXXXXXXXXXXXXXXXXXXX",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET,POST,PUT,DELETE,PATCH"
}))

app.use(session({
    secret: process.env.SESSION_SECRET || "XXXXXXXXXXXXXXXXXXXXX",
    resave: false,
    saveUninitialized: false,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
