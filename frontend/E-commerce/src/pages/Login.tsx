import { useForm } from "react-hook-form"
import type { IAuth } from "../interfaces"
import { useNavigate } from "react-router"
import { useAuthStore } from "../store/authStore"

export default function Login() {
    const { register, handleSubmit } = useForm<IAuth>()
    const navigate = useNavigate()
    const { login } = useAuthStore()

    const onSubmit = async (data: IAuth) => {
        await login(data)
        navigate("/home")
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-6">
            <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
                        Welcome Back
                    </h1>

                    <p className="mt-3 text-zinc-500">
                        Sign in to continue shopping
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div className="space-y-2">
                        <label
                            htmlFor="username"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Username
                        </label>

                        <input
                            {...register("username", { required: true })}
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-zinc-700"
                        >
                            Password
                        </label>

                        <input
                            {...register("password", { required: true })}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-zinc-900 py-3 font-medium text-white transition hover:bg-zinc-700 active:scale-[0.98]"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-zinc-500">
                        Don´t have an account?
                    </p>

                    <button
                        onClick={() => navigate("/register")}
                        className="mt-3 text-sm font-semibold text-zinc-900 transition hover:text-zinc-600"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}