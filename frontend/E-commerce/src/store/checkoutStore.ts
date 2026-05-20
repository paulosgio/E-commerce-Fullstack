import { create } from "zustand";
import type { ICartItem } from "../interfaces";

interface ICheckoutStore {
    checkoutItems: ICartItem[],
    setCheckoutItems: (items: ICartItem[], type: "cart" | "buy_now")=> void,
    clearCheckout: ()=> void,
    checkoutType: "cart" | "buy_now" | null
}

export const useCheckoutStore = create<ICheckoutStore>((set)=> ({
    checkoutItems: [],

    checkoutType: null,

    setCheckoutItems: (items, type)=> {
        set({ checkoutItems: items, checkoutType: type })
    },

    clearCheckout: ()=> {
        set({ checkoutItems: [], checkoutType: null })
    }
}))