import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        index: true,
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"],
        lowercase: true,
        trim: true,
        default: "user"
    },

    myOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
}, {
    timestamps: true
});

// Define pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcryptjs.hash(user.password, 10);
    }
    next();
});

// Define method to compare passwords
userSchema.methods.comparePassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
};



export const User = mongoose.model("User", userSchema);
