import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";



export const createOrder = async (req, res) => {
    const { user, orderItems, billingAddress, paymentMethod, subtotal, tax, shippingCharges, total } = req.body;

    if (!user || !orderItems || !billingAddress || !paymentMethod || !subtotal || !tax || !shippingCharges || !total) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const order = await Order.create({ user, orderItems, billingAddress, paymentMethod, subtotal, tax, shippingCharges, total });

        if (!order) {
            return res.status(400).json({ message: "Order not created" });
        }

        // Find the user by ID
        const userToUpdate = await User.findById(user);

        // Check if the user exists and if the user's orders array exists
        if (!userToUpdate || !userToUpdate.myOrders) {
            return res.status(404).json({ message: "User not found or orders array not defined" });
        }

        // Push the entire order object to the user's orders array
        userToUpdate.myOrders.push(order);

        // Save the updated user
        await userToUpdate.save();

        res.status(201).json({ message: "Order created successfully", order });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrderById = async (req, res) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({ message: "Order ID is required" });
    }

    try {
        const order = await Order.findById(id).populate("user");

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Order ID is required" });
    }

   try {
        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        switch (order.status) {
            case "pending":
                order.status = "shipped";
                break;
    
            case "shipped":
                order.status = "delivered";
                break;
    
            default:
                order.status = "delivered";
                break;
        }
        
        await order.save();

        res.status(200).json({ message: "Order updated successfully", order });
   } catch (error) {
            res.status(500).json({ message: error.message });
   }
}

