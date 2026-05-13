import Cart from "../models/Cart.js";

export async function addToCartService(data) {
    const { userId, product } = data
    try {
        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = await Cart.create({
                userId,
                products: [],
                total: 0
            })
        }
        cart.products.push(product)
        cart.total += product.price * product.quantity
        await cart.save()
        return data
    } catch (error) {
        throw new Error("error to add on cart: " + error);
    }
}

export async function listCartService({ _id }) {
    try {
        const cart = await Cart.findOne(_id)
        if (!cart) {
            cart = await Cart.create({
                userId,
                products: [],
                total: 0
            })
        }
        return cart
    } catch (error) {
        throw new Error(error);
    }
}

export async function removeToCartService({ _id }) {
    try {
        const cart = await Cart.findOneAndDelete(_id)
        return cart
    } catch (error) {
        throw new Error(error);
    }
}