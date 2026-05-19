import { useEffect, useState } from "react"
import type { IProduct } from "../interfaces"
import { GetProducts } from "../services/ProductServices"
import { AddToCartService } from "../services/CartServices"
import { toast } from "sonner"
import { useNavigate } from "react-router"

export default function Home() {
    const [products, setProducts] = useState<IProduct[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await GetProducts()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <div className="min-h-screen bg-zinc-100 px-6 py-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-zinc-900">
                            Products
                        </h1>

                        <p className="mt-2 text-zinc-500">
                            Explore our newest collection
                        </p>
                    </div>
                </div>

                {products.length > 0 ? (
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map(({ price, title, _id }) => {
                            return (
                                <li
                                    onClick={()=> navigate(`/home/product/${_id}`)}
                                    key={_id}
                                    className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="flex h-64 items-center justify-center bg-zinc-200">
                                        <span className="text-sm text-zinc-500">
                                            Product Image
                                        </span>
                                    </div>

                                    <div className="space-y-4 p-5">
                                        <div>
                                            <h3 className="line-clamp-1 text-lg font-semibold text-zinc-900">
                                                {title}
                                            </h3>

                                            <p className="mt-2 text-2xl font-bold text-zinc-800">
                                                R$ {price}
                                            </p>
                                        </div>

                                        <button
                                            onClick={async (e) => {
                                                e.stopPropagation()
                                                try {
                                                    await AddToCartService({
                                                    productId: _id
                                                    })
                                                    toast.success("Product added to cart!")
                                                } catch (error) {
                                                    toast.error("Error adding product")
                                                }
                                            }}
                                            className="w-full rounded-2xl bg-zinc-900 py-3 font-medium text-white transition hover:bg-zinc-700 active:scale-[0.98]"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="flex h-[50vh] items-center justify-center">
                        <h1 className="text-2xl font-semibold text-zinc-500">
                            No products
                        </h1>
                    </div>
                )}
            </div>
        </div>
    )
}