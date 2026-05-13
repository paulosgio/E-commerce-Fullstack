import { Router } from "express";
import { AddToCart, ListCart, removeToCart } from "../controllers/CartController.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = Router()

router.get("/:id", auth, ListCart)
router.post("/addToCart", auth, AddToCart)
router.post("/:id", auth, removeToCart)

export default router