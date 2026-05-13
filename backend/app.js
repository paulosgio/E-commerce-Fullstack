import express from "express"
import cors from "cors"
import ProductRoutes from "./src/routes/ProductRoutes.js"
import CartRoutes from "./src/routes/CartRoutes.js"
import RegisterRoute from "./src/routes/RegisterRouter.js"
import LoginRoute from "./src/routes/LoginRoute.js"
import { auth } from "./src/middlewares/authMiddleware.js"

export const app = express()

app.use(express.json())
app.use(cors())
app.use("/products", auth, ProductRoutes)
app.use("/cart/user", auth, CartRoutes)
app.use("/register", RegisterRoute)
app.use("/login", LoginRoute)