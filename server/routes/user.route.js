import { Router } from "express";
import { deleteUser, getAllUsers, getUserDetails, myOrders, userLogin, userLogout, userRegister } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = Router();

router.post("/register", userRegister)

router.post("/login", userLogin)

router.post("/logout", userLogout)

router.get("/getuser", verifyToken, getUserDetails)

router.get("/getAllUsers", verifyToken, verifyAdmin, getAllUsers)

router.get("/myorders", verifyToken, myOrders)

router.delete("/delete", verifyToken, verifyAdmin, deleteUser)

export default router