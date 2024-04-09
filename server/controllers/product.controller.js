import { Product } from "../models/product.model.js";
import { deleteImage, uploadOnCloudinary } from "../utils/cloudinary.js";

export const createProduct = async (req, res) => {
    const { name, description, basePrice, discountedPrice, category, stock, productQuantity } = req.body;
    const image = req.file?.path;

    if (!name || !description || !basePrice || !discountedPrice || !category || !stock || !productQuantity || !image) {
        return res.status(400).json({
            message: "Please fill all the fields"
        })
    }

    const localFilePath = image;

    const uploadedImage = await uploadOnCloudinary(localFilePath, category);

    const product = await Product.create({ name, description, basePrice, discountedPrice, category, stock, productQuantity, image: uploadedImage });

    if (!product) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }

    res.status(201).json({
        message: "Product created successfully",
        product
    })



}

export const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    if (!products) {
        return res.status(500).json({
            message: "Cannot fetch products"
        })
    }
    res.status(200).json({
        message: "Products fetched successfully",
        products
    })
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }
    res.status(200).json({
        message: "Product fetched successfully",
        product
    })
}

export const deleteProduct = async (req, res) => {
    const { id } = req.body;
    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const imageUrl = product.image;
        const imageName = imageUrl.split('/').pop().split('.')[0];

        const publicId = `Grocery_Store/${product.category}/${imageName}`

        deleteImage(publicId);

        await Product.findByIdAndDelete(id);

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting the product" });
    }
};

export const updateProduct = async (req, res) => {
    const { id, name, description, basePrice, discountedPrice, category, stock, productQuantity } = req.body;

    const product = await Product.findById(id);

    if (name) product.name = name;
    if (description) product.description = description;
    if (basePrice) product.basePrice = basePrice;
    if (discountedPrice) product.discountedPrice = discountedPrice;
    if (category) product.category = category;
    if (stock) product.stock = stock;
    if (productQuantity) product.productQuantity = productQuantity;
    if (req.file) product.image = await uploadOnCloudinary(req.file.path, category);
    const updatedProduct = await product.save();

    res.status(200).json({
        message: "Product updated successfully",
        updatedProduct
    })
}
export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        if (!category) {
            return res.status(400).json({ message: "Category parameter is required" });
        }

        const products = await Product.find({ category });

        if (!products) {
            return res.status(404).json({ message: "Products not found" });
        }

        res.status(200).json({
            message: "Products fetched successfully",
            products
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Failed to fetch products" });
    }
};

export const getProductsBySearch = async (req, res) => {
    try {
        const { query } = req.params;
        
        if (!query) {
            return res.status(400).json({ message: "Query parameter is required" });
        }

        console.log(query);
        
        // const products = await Product.find({ name: { $regex: query, $options: "i" } });
        // if (!products) {
        //     return res.status(404).json({ message: "Products not found" });
        // }
        // res.status(200).json({
        //     message: "Products fetched successfully",
        //     products
        // });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Failed to fetch products" });
    }
}