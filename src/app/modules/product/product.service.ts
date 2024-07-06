import { TProduct } from "./product.interface"
import { Products } from "./product.model"

const createProductInDB = async(productData: TProduct) =>{
    const result = await Products.create(productData)
    return result
}


const getAllProductsFromDB = async() =>{
    const result = await Products.find();
    return result;
}


export const ProductServices = {
    createProductInDB,
    getAllProductsFromDB
}