import { Router } from "express";
import { AddToCart, ClearCart, ListCart, removeToCart } from "../controllers/CartController.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = Router()

router.get("/", auth, ListCart)
router.post("/", auth, AddToCart)
router.delete("/clear", auth, ClearCart)
router.delete("/:id", auth, removeToCart)

export default router