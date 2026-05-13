import { Router } from "express";
import { Register } from "../controllers/RegisterController.js";

const router = Router()
router.post("/", Register)

export default router