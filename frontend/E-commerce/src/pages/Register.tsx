import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import type { IAuth } from "../interfaces"
import { RegisterService } from "../services/RegisterService"
import { useState } from "react"

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IAuth>()

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState<string>("")

    const onSubmit = async (data: IAuth) => {
        try {
            setErrorMessage("")

            await RegisterService(data)

            navigate("/")
        } catch (error) {
            setErrorMessage("The register failed")
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-10">
            <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
                        Create account
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        Register to start shopping
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-zinc-700"
                        >
                            Username
                        </label>

                        <input
                            {...register("username", {
                                required: "Username is required"
                            })}
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                        />

                        {errors.username && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-zinc-700"
                        >
                            Password
                        </label>

                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must have at least 6 characters"
                                }
                            })}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-900 focus:bg-white"
                        />

                        {errors.password && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {errorMessage && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3">
                            <p className="text-sm font-medium text-red-500">
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-8 border-t border-zinc-200 pt-6 text-center">
                    <p className="text-sm text-zinc-500">
                        Already have an account?
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-3 w-full rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-100"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}