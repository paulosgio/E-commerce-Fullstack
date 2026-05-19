import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function loginService(data) {
    const { username, password } = data
    const user = await User.findOne({ username })
    if (!user) {
        throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw new Error("Password is incorrect");
    }
    const token = jwt.sign(
        {
            _id: user._id,
            username: user.username
        },
        process.env.SECRET_TOKEN,
        {
            expiresIn: "7d"
        }
    )
    return token
}

export async function registerService(data) {
    const { username, password } = data
    try {
        const user = await User.findOne({ username })
        if (user) {
            throw new Error("User already exist");
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            password: hashedPassword
        })
        return {
            _id: newUser._id,
            username
        }
    } catch (error) {
        throw new Error("Error to register " + error);
    }
}

export async function meService(_id) {
    try {
        const user = await User.findById(_id).select("-password")
        return user
    } catch (error) {
        throw new Error("User not found");
    }
}