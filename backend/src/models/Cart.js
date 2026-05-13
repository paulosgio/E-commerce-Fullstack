import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: String,
    products: [
        {
            title: String,
            price: Number,
            quantity: Number
        }
    ],
    total: Number
})

export default mongoose.model("Cart", cartSchema) 