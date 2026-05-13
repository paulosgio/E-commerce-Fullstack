import { useEffect, useState } from "react"
import type { IProduct } from "../interfaces"
import { GetProducts } from "../services/ProductServices"

export default function Home() {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(()=> {
        const fetchProducts = async ()=> {
            const data = await GetProducts()
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return(
        <>
            <ul>
                {products.length > 0 ? products.map(({ price, quantity, title, _id })=> {
                    return(
                        <li key={_id}>
                            <h3>{title}</h3>
                            <h4>{quantity}</h4>
                            <p>{price}</p>
                        </li>
                    )
                }) : (
                    <h1>No products</h1>
                    )
                }
            </ul>
        </>
    )
}