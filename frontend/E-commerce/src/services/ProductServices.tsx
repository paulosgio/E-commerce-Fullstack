import { api } from "../api/api";

export async function GetProducts() {
    const response = await api.get("products")
    return response.data
}