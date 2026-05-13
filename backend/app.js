import express from "express"
import ProductRoutes from "./src/routes/ProductRoutes.js"
import CartRoutes from "./src/routes/CartRoutes.js"
import RegisterRoute from "./src/routes/RegisterRouter.js"
import LoginRoute from "./src/routes/LoginRoute.js"

export const app = express()

app.use(express.json())
app.use("/products", ProductRoutes)
app.use("/cart/user", CartRoutes)
app.use("/register", RegisterRoute)
app.use("/login", LoginRoute)