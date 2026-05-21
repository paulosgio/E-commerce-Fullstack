import express from "express"
import cors from "cors"
import ProductRoutes from "./src/routes/ProductRoutes.js"
import CartRoutes from "./src/routes/CartRoutes.js"
import RegisterRoute from "./src/routes/RegisterRouter.js"
import LoginRoute from "./src/routes/LoginRoute.js"
import MeRoute from "./src/routes/MeRoute.js"
import { auth } from "./src/middlewares/authMiddleware.js"

export const app = express()

app.use(express.json())
app.use(cors({origin: "https://e-commerce-fullstack-tawny.vercel.app"}))
app.use("/products", ProductRoutes)
app.use("/cart", CartRoutes)
app.use("/register", RegisterRoute)
app.use("/login", LoginRoute)
app.use("/me", MeRoute)