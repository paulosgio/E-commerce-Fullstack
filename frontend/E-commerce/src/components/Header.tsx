import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAuthStore } from "../store/authStore"

export default function Header() {
    const navigate = useNavigate()
    const { logOut, fetchMe, me } = useAuthStore()

    async function logout() {
        logOut()
        navigate("/")
    }

    useEffect(() => {
        fetchMe()
    }, [])

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
                <div
                    onClick={() => navigate("/home")}
                    className="cursor-pointer"
                >
                    <h1 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                        DevStore
                    </h1>

                    <p className="text-xs text-zinc-500 sm:text-sm">
                        Modern E-commerce
                    </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-100 px-2 py-2 sm:px-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                            {me?.username?.charAt(0).toUpperCase()}
                        </div>

                        <div className="hidden sm:flex sm:flex-col">
                            <span className="text-xs text-zinc-500">
                                Logged as
                            </span>

                            <span className="max-w-[120px] truncate text-sm font-semibold text-zinc-800">
                                {me?.username || "Loading..."}
                            </span>
                        </div>
                    </div>

                    <nav className="flex items-center gap-2">
                        <button
                            onClick={() => navigate("/cart")}
                            className="rounded-2xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-100 sm:px-5 sm:py-2.5 sm:text-sm"
                        >
                            Cart
                        </button>

                        <button
                            onClick={logout}
                            className="rounded-2xl bg-zinc-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-zinc-700 active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
                        >
                            Log out
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}