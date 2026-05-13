import type React from "react"

export interface IAuth {
    username: string,
    password: string
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
    quantity: number
}