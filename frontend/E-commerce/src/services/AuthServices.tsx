import { api } from "../api/api"
import type { IAuth } from "../interfaces"

export async function LoginService(data: IAuth) {
    try {
        const response = await api.post("/login", data)
        return response.data
    } catch (error) {
        console.log(error);
    }
}