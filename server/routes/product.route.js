import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductsByCategory, getProductsBySearch, updateProduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin, upload.single("image"), createProduct)

router.get("/all", getAllProducts)

router.get("/:id", getProductById)

router.get("/category/:category", getProductsByCategory);

router.get("/search/:query", getProductsBySearch)

router.delete("/delete", verifyToken, verifyAdmin, deleteProduct)

router.put("/update", verifyToken, verifyAdmin, upload.single("image"), updateProduct)



export default router