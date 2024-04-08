import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },
    
    basePrice: {
        type: Number,
        required: true
    },

    discountedPrice: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    productQuantity: {
        type: String,
        required: false
    },

    stock:{
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true,
        enum: ["fruits", "vegetables", "drinks", "bakery", "personal_care", "grains", "snaks"]
    },
} , { timestamps: true });

export const Product = mongoose.model("Product", productSchema)