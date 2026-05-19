import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";
import { Me } from "../controllers/MeController.js";

const router = Router()

router.get("/", auth, Me)

export default router