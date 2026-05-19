import { api } from "../api/api";

export async function GetProductsService() {
    const response = await api.get("products")
    return response.data
}