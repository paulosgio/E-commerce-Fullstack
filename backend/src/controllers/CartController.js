import { listCartService, addToCartService, removeToCartService } from "../services/cartService.js";

export async function ListCart(req, res) {
    const cart = await listCartService(req.user._id)
    res.status(200).json(cart)
}

export async function AddToCart(req, res) {
    const added = await addToCartService(req.body, req.user._id)
    res.status(201).json(added)
}

export async function removeToCart(req, res) {
    const removed = await removeToCartService(req.params.id, req.user._id)
    res.status(200).json(removed)
}