import { api } from "../api/api";

export async function MeService() {
    const response = await api.get("/me")
    return response.data
}