import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected: ${connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};