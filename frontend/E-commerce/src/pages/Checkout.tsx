import { useNavigate } from "react-router"
import { useCheckoutStore } from "../store/checkoutStore"
import { toast } from "sonner"
import { useCartStore } from "../store/cartStore"

export default function Checkout() {

    const { checkoutItems, clearCheckout, checkoutType } = useCheckoutStore()
    const { clearCart } = useCartStore()
    const total = checkoutItems.reduce((acc, item)=> {
        acc += item.productId.price * item.quantity
        return acc
    }, 0)
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-zinc-100 px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex flex-col gap-3">
                    <span className="w-fit rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                        Secure Checkout
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
                        Complete your purchase
                    </h1>

                    <p className="max-w-2xl text-zinc-500">
                        Review your order, choose your payment method
                        and finish your checkout securely.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-900">
                                        Shipping Address
                                    </h2>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        Enter your delivery details
                                    </p>
                                </div>

                                <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                                    Step 1
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    className="md:col-span-2 rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="City"
                                    className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="ZIP Code"
                                    className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />
                            </div>
                        </section>

                        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-900">
                                        Payment Method
                                    </h2>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        Select your preferred payment
                                    </p>
                                </div>

                                <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                                    Step 2
                                </div>
                            </div>

                            <div className="mb-6 grid grid-cols-3 gap-3">
                                <button className="rounded-2xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                                    Card
                                </button>

                                <button className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-900 hover:bg-zinc-100">
                                    PIX
                                </button>

                                <button className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-900 hover:bg-zinc-100">
                                    Boleto
                                </button>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="md:col-span-2 rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                                />
                            </div>
                        </section>
                    </div>

                    <aside className="h-fit rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-zinc-900">
                                Order Summary
                            </h2>

                            <p className="mt-1 text-sm text-zinc-500">
                                Review your items before payment
                            </p>
                        </div>

                        <div className="space-y-5">
                                {checkoutItems.map(({ productId, quantity })=> {
                                    return(
                                        <div
                                        key={productId._id}
                                        className="flex items-center gap-4 rounded-2xl bg-zinc-100 p-4"
                                        >
                                        <div className="h-20 w-20 overflow-hidden rounded-2xl bg-zinc-300">
                                            <img
                                                src={productId.image}
                                                alt={productId.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-semibold text-zinc-900">
                                                {productId.title}
                                            </h3>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                Quantity: {quantity}
                                            </p>
                                        </div>

                                        <span className="font-bold text-zinc-900">
                                            {(productId.price * quantity).toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL"
                                                })}
                                        </span>
                                    </div>
                                    )
                                })}
                        </div>

                        <div className="my-8 space-y-4 border-y border-zinc-200 py-6">
                            <div className="flex items-center justify-between text-sm text-zinc-600">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium text-zinc-700">
                                Total
                            </span>

                            <span className="text-3xl font-bold text-zinc-900">
                                {total.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </span>
                        </div>

                        <button onClick={async ()=> {
                            try {

                                if (checkoutType === "cart") {
                                    await clearCart()
                                }

                                clearCheckout()

                                toast.success("Your purchase was successful")
                                
                            } catch (error) {
                                toast.error("Error on purchase")
                            }
                            navigate("/home")
                        }} className="mt-8 w-full rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.99]">
                            Complete Purchase
                        </button>

                        <p className="mt-4 text-center text-xs text-zinc-500">
                            Secure payment protected with encryption
                        </p>
                    </aside>
                </div>
            </div>
        </div>
    )
}