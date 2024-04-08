import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            basePrice: { type: Number, required: true },
            discountedPrice: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            }
        }
    ],

    billingAddress: {
        email: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        pincode: { type: String, required: true },
        address: { type: String, required: true },
    },

    paymentMethod: {
        type: String,
        required: true,
        enum: ["cod", "online"]
    },

    subtotal: {
        type: Number,
        required: true
    },

    shippingCharges: {
        type: Number,
        required: true
    },

    tax: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: ["pending",  "shipped", "delivered", ],
        default: "pending"

    }
})

 export const Order = mongoose.model("Order", orderSchema);