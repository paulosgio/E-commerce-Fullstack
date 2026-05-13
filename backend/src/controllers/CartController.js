import { listCartService, addToCartService, removeToCartService } from "../services/cartService.js";

export async function ListCart(req, res) {
    const cart = await listCartService(req.params.id)
    res.status(200).json(cart)
}

export async function AddToCart(req, res) {
    const added = await addToCartService(req.body)
    res.status(201).json(added)
}

export async function removeToCart(req, res) {
    const removed = await removeToCartService(req.params.id)
    res.status(204).json(removed)
}