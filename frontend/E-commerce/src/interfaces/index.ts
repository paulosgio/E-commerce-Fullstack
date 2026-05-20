import type React from "react"

export interface IAuth {
    username: string,
    password: string
} 

export interface IMe {
    _id: string,
    username: string
}

export interface IPrivateRoute {
    children: React.ReactNode
}

export interface IMainLayout {
    children: React.ReactNode
}

export interface IProduct {
    _id: string
    title: string,
    price: number,
    image: string
}

export interface ICart {
    userId: string,
    products: ICartItem[]
    total: number
}

export interface ICartItem {
    productId: IProduct,
    quantity: number
}

export interface IAddToCart {
    productId: string,
    quantity?: number
}