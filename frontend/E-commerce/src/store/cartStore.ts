import { create } from "zustand";
import type { IAddToCart, ICart, ICartItem } from "../interfaces";
import { AddToCartService, DeleteItemFromCartService, GetCartService } from "../services/CartServices";

interface ICartStore {
    cart: ICartItem[] | null,
    getCart: ()=> Promise<void>
    deleteItemFromCart: (productId: string)=> Promise<void>,
    addToCart: (data: IAddToCart)=> Promise<void>
    total: number
}

export const useCartStore = create<ICartStore>((set)=> ({
    cart: null,

    total: 0,

    getCart: async () => {
        try {
            const response: ICart = await GetCartService()
            const total = response.total
            const cart: ICartItem[] = response.products
            set({cart})
            set({total})
        } catch (error) {
            console.log(error);
        }
    },

    deleteItemFromCart: async (productId: string)=> {
        try {
            await DeleteItemFromCartService(productId)
            const data: ICart = await GetCartService()
            const total = data.total
            const cart: ICartItem[] = data.products
            set({cart})
            set({total})
        } catch (error) {
            console.log(error);
        }
    },

    addToCart: async (data: IAddToCart)=> {
        try {
            await AddToCartService(data)
            const response: ICart = await GetCartService()
            const total = response.total
            const cart: ICartItem[] = response.products
            set({cart})
            set({total})
        } catch (error) {
            console.log(error);
        }
    }
}))