import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";


export const createOrder = async (req, res) => {
    const { user, orderItems, billingAddress,  subtotal, tax, shippingCharges, total } = req.body;

    if (!user || !orderItems || !billingAddress  || !subtotal || !tax || !shippingCharges || !total) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const order = await Order.create({ user, orderItems, billingAddress,  subtotal, tax, shippingCharges, total });

        if (!order) {
            return res.status(400).json({ message: "Order not created" });
        }

        const userToUpdate = await User.findById(user);

        if (!userToUpdate || !userToUpdate.myOrders) {
            return res.status(404).json({ message: "User not found or orders array not defined" });
        }

        userToUpdate.myOrders.push(order);

        await userToUpdate.save();

        for (let i = 0; i < orderItems.length; i++) {
            const order = orderItems[i];
            const product = await Product.findById(order.product);
            if (product) {
                product.stock -= order.qty;
                await product.save();
            }
        }

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

export const getOrderByUser = async (req, res) => {
    const { id } = req.user;


    if (!id) {
        return res.status(400).json({ message: "User ID is required" });
    }

    try {
        const order = await Order.find({ user: id });

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

