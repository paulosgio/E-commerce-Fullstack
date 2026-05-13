import { listProductsService, createProductService, showProductService, updateProductService, deleteProductService } from "../services/productService.js";

export async function ListProducts(req, res) {
    const products = await listProductsService()
    return res.status(200).json(products)
}

export async function CreateProducts(req, res) {
    const product = await createProductService(req.body)
    return res.status(201).json(product)
}

export async function ShowProduct(req, res) {
    const product = await showProductService(req.params.id)
    return res.status(200).json(product)
}

export async function UpdateProduct(req, res) {
    const product = await updateProductService(req.params.id, req.body)
    return res.status(202).json(product)
}

export async function DeleteProduct(req, res) {
    const product = await deleteProductService(req.params.id)
    return res.status(200).json(product)
}