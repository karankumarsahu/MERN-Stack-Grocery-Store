import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const userRegister = async (req, res) => {
    try {
        const { username, fullName, email, password } = req.body;

        if (!username || !fullName || !email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields"
            });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const user = await User.create({ username, fullName, email, password });
        res.status(201).json({
            message: "User registered successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields"
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const options = {
            httpOnly: true,
            secure: true
        };

        const token = generateAccessToken(user._id);


        res.status(200)
            .cookie("accessToken", token, options)
            .json({
                message: "User logged in successfully",
                user,
                token
            });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const userLogout = async (req, res) => {
    try {
        res.clearCookie("accessToken");
        res.status(200).json({
            message: "User logged out successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


export const getUserDetails = async (req, res) => {
    try {
        const _id = req.user._id;
    
        if (!_id) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
    
        const user = await User.findById(_id);
    
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
    
        res.status(200).json({
            message: "User details fetched successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "Users fetched successfully",
            users
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const _id = req.body;

        if (!_id) {
            return res.status(401).json({
                message: "Please enter user id"
            });
        }
        const user = await User.findByIdAndDelete(_id);
        res.status(200).json({
            message: "User deleted successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const myOrders = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const user = await User.findById(userId).populate("myOrders");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User details fetched successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
