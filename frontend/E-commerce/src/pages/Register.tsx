import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import type { IAuth } from "../interfaces"
import { RegisterService } from "../services/RegisterService"

export default function Register() {
    const { register, handleSubmit } = useForm<IAuth>()
    const navigate = useNavigate()

    const onSubmit = async (data: IAuth)=> {
        await RegisterService(data)
        navigate("/")
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
            <button onClick={()=> navigate("/")}>Sign in</button>
        </>
    )
}