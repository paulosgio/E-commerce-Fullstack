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
app.post("/seed-products", async (req, res) => {
    await Product.insertMany([
        {
            title: "iPhone 15 Pro Max",
            price: 8999,
            image: "https://images.unsplash.com/photo-1696446702183-cbd13b6e4785?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "PlayStation 5",
            price: 4299,
            image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "MacBook Air M2",
            price: 9499,
            image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Samsung Odyssey G5",
            price: 1899,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Logitech G Pro X",
            price: 799,
            image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "RTX 4070 Ti",
            price: 5299,
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Mechanical Keyboard RGB",
            price: 459,
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "AirPods Pro",
            price: 1999,
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=1200&auto=format&fit=crop"
        }
    ])

    res.json({
        message: "Products created successfully"
    })
})