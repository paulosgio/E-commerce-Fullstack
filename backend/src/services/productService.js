import Products from "../models/Products.js";

export async function listProductsService() {
    return await Products.find() 
}

export async function showProductService(_id) {
    try {
        const product = await Products.findOne({ _id })
        return product
    } catch (error) {
        throw new Error("product not exist " + error);
    }
}

export async function createProductService(data) {
    const { title, price } = data
    try {
        const productAlredyExist = await Products.findOne({ title })
        if (productAlredyExist) {
            throw new Error("Product alredy exist");
        }
        const product = await Products.create({
            title,
            price,
        })
        return product
    } catch (error) {
        throw new Error("error to create the product " + error);
    }
}

export async function updateProductService(_id, data) {
    try {
        const product = await Products.findOneAndUpdate({ _id }, data, { new: true })
        return product
    } catch (error) {
        throw new Error("fail to update the product " + error);
    }
}

export async function deleteProductService(_id, data) {
    try {
        const product = await Products.findOneAndDelete({ _id })
        return product
    } catch (error) {
        throw new Error("fail to delete the product " + error);
    }
}

