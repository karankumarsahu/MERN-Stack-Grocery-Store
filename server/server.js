import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

connectDB()
.then(()=> {
    app.listen(process.env.PORT, (req, res) => {
        console.log("Server is running on port " + process.env.PORT || 8000);
        app.get("/", (req, res) => {
            res.send("Hello")
        })
    })
})
.catch(err => {
    console.log("Mongodb connection error: ", err);
})