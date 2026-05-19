import { useEffect } from "react"
import { useCartStore } from "../store/cartStore"

export default function Cart() {
    const { cart, deleteItemFromCart, getCart, total } = useCartStore()

    const fetchCart = async () => {
        try {
            await getCart()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <div className="min-h-screen bg-zinc-100 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-zinc-900">
                        Shopping Cart
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        Review your selected products
                    </p>
                </div>

                {cart && cart.length > 0 ? (
                    <ul className="space-y-5">
                        {cart.map(({ productId, quantity }) => {
                            return (
                                <li
                                    key={productId._id}
                                    className="flex flex-col gap-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:flex-row md:items-center md:justify-between"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-zinc-200">
                                            <span className="text-xs text-zinc-500">
                                                Image
                                            </span>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold text-zinc-900">
                                                {productId.title}
                                            </h2>

                                            <h3 className="mt-2 text-lg font-bold text-zinc-700">
                                                R$ {total}
                                            </h3>

                                            <h4 className="mt-1 text-sm text-zinc-500">
                                                Quantity: {quantity}
                                            </h4>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() =>
                                            deleteItemFromCart(productId._id)
                                        }
                                        className="rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600 active:scale-[0.98]"
                                    >
                                        Remove
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="flex h-[50vh] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-white">
                        <h1 className="text-3xl font-bold text-zinc-700">
                            Your cart is empty
                        </h1>

                        <p className="mt-3 text-zinc-500">
                            Add products to continue shopping
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}