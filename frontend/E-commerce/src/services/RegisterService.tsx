import { api } from "../api/api";
import type { IAuth } from "../interfaces";

export async function RegisterService(data: IAuth) {
    try {
        const response = await api.post("/register", data)
        return response.data
    } catch (error) {
        console.log(error);
    }
}