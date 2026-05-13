import { useForm } from "react-hook-form"
import type { IAuth } from "../interfaces"
import { LoginService } from "../services/AuthServices"
import { useNavigate } from "react-router"

export default function Login() {
    const { register, handleSubmit } = useForm<IAuth>()
    const navigate = useNavigate()

    const onSubmit = async (data: IAuth)=> {
        const token = await LoginService(data)
        if (token) {
            localStorage.setItem("token", token)
            navigate("/home")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input { ...register("username", { required: true }) } type="text" id="username"/>
                <label htmlFor="password">Password</label>
                <input { ...register("password", { required: true }) } type="password" id="password"/>
                <button type="submit">Enviar</button>
            </form>
            <button onClick={()=> navigate("/register")}>Sign up!</button>
        </>
    )
}