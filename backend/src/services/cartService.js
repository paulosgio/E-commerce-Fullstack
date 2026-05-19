import Cart from "../models/Cart.js";
import Products from "../models/Products.js";

export async function addToCartService(data, userId) {
    const { productId, quantity = 1 } = data
    
    try {
        const product = await Products.findById(productId)
        if (!product) {
            throw new Error("Product not found");
        }
        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = await Cart.create({
                userId,
                products: [],
                total: 0
            })
        }
        const existingProduct = cart.products.find(item => item.productId.toString() === productId)
        if (existingProduct) {
            existingProduct.quantity += quantity
        } else {
            cart.products.push({
                productId,
                quantity
            })
        }
        cart.total += product.price * quantity
        await cart.save()
        return cart
    } catch (error) {
        throw new Error("error to add on cart: " + error);
    }
}

export async function listCartService(userId) {
    try {
        let cart = await Cart.findOne({ userId }).populate("products.productId")
        console.log(cart);
        
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

export async function removeToCartService(productId, userId) {
    try {
        const product = await Products.findById(productId)
        const cart = await Cart.findOne({ userId })
        if (!cart) {
            throw new Error("Cart not found");
        }
        const existingProduct = cart.products.find(item => item.productId.toString() === productId)
        if (!existingProduct) {
            throw new Error("Product not in cart");
        }
        cart.total -= product.price
        if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1
        } else {
            cart.products = cart.products.filter(item => item.productId.toString() !== productId)
        }
        await cart.save()
        return cart
    } catch (error) {
        throw new Error(error);
    }
}