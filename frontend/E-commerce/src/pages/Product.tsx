import { useParams } from "react-router"
import { useProductStore } from "../store/productStore"
import { useEffect } from "react"
import { useCartStore } from "../store/cartStore"
import { toast } from "sonner"


export default function Product() {
    const { id } = useParams()

    const { getProducts, products } = useProductStore()

    const { addToCart } = useCartStore()

    useEffect(() => {
        const fetchProducts = async () => {
            await getProducts()
        }

        fetchProducts()
    }, [])

    const product = products?.find(item => item._id === String(id))

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-6">
                <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
                    <h1 className="text-3xl font-bold text-zinc-800">
                        Product not found
                    </h1>

                    <p className="mt-3 text-zinc-500">
                        This product does not exist.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-zinc-100 px-6 py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
                <div className="flex items-center justify-center rounded-3xl bg-zinc-200 p-10">
                    <div className="flex h-100 w-full items-center justify-center rounded-2xl border border-dashed border-zinc-400">
                        <span className="text-lg text-zinc-500">
                            Product Image
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div>
                        <span className="rounded-full bg-zinc-900 px-4 py-1 text-xs font-medium uppercase tracking-wider text-white">
                            New Collection
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900">
                            {product.title}
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-zinc-500">
                            Premium product with modern design and excellent
                            quality. Perfect for your e-commerce showcase.
                        </p>

                        <div className="mt-8">
                            <span className="text-5xl font-bold text-zinc-900">
                                R$ {product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={() => {
                                try {
                                    addToCart({
                                        productId: product._id
                                    })
                                    toast.success("Product added to cart!")
                                } catch (error) {
                                    toast.error("Error adding product")
                                }
                            }
                            }
                            className="rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
                        >
                            Add to cart
                        </button>

                        <button
                            className="rounded-2xl border border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-100"
                        >
                            Buy now
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-zinc-100 p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                Free Shipping
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                                Nationwide delivery
                            </p>
                        </div>

                        <div className="rounded-2xl bg-zinc-100 p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                Secure Payment
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                                100% protected checkout
                            </p>
                        </div>

                        <div className="rounded-2xl bg-zinc-100 p-4">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                Support
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                                Fast customer service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// SO FALTA AGORA TELA DE CHECKOUT, BOTAR IMAGEM NOS PRODUTOS, NAVEGAÇAO DOS PRODUTOS/CHECKOUT NOS PRODUTOS SINGULARES