import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo connected");
    } catch (error) {
        console.log("connection with mongo failed");
        console.log(error.message);
    }
}