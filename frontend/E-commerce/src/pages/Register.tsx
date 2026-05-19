import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import type { IAuth } from "../interfaces"
import { RegisterService } from "../services/RegisterService"
import { useState } from "react"

export default function Register() {
    const { register, handleSubmit } = useForm<IAuth>()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>("")
    

    const onSubmit = async (data: IAuth)=> {
        try {
            await RegisterService(data)
            navigate("/")
        } catch (error) {
            setErrorMessage("The register failed")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input { ...register("username", { required: "Username is required" }) } type="text" id="username"/>
                <label htmlFor="password">Password</label>
                <input { ...register("password", { required: "Password is required" }) } type="password" id="password"/>
                <button type="submit">Enviar</button>
                {errorMessage && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3">
                        <p className="text-sm font-medium text-red-500">
                            {errorMessage}
                        </p>
                    </div>
                )}
            </form>
            <button onClick={()=> navigate("/")}>Sign in</button>
        </>
    )
}