import { Router } from "express";
import { CreateProducts, ListProducts, ShowProduct, UpdateProduct, DeleteProduct } from "../controllers/ProductsController.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = Router()

router.get("/", auth, ListProducts)
router.get("/:id", auth, ShowProduct)
router.post("/", auth, CreateProducts)
router.put("/:id", auth, UpdateProduct)
router.delete("/:id", auth, DeleteProduct)

export default router