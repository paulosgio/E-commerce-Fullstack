import { api } from "../api/api";
import type { IAddToCart } from "../interfaces";

export async function GetCartService() {
    const response = await api.get(`/cart`)
    return response.data
}

export async function DeleteItemFromCartService(product_id: string) {
    await api.delete(`/cart/${product_id}`)
}

export async function AddToCartService(data: IAddToCart) {
    await api.post("/cart", data)
}