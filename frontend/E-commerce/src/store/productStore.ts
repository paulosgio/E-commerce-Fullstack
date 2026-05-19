import { create } from "zustand";
import type { IProduct } from "../interfaces";
import { GetProductsService } from "../services/ProductServices";

interface IProductsStore {
    products: IProduct[] | null,
    getProducts: ()=> Promise<void>
}

export const useProductStore = create<IProductsStore>((set)=> ({
    products: null,
    getProducts: async ()=> {
        const data = await GetProductsService()
        set({products: data})
    }
}))