import { ObjectId, Types } from "mongoose"
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


const getSingleProductFromDB = async(productsId: string) =>{
    const id = new Types.ObjectId(productsId);
    const result = await Products.findById(id);

    return result;
}

const getSingleProductByName = async (name: string) =>{
    const regex = new RegExp(name, 'i');
    const result = await Products.find({name: { $regex: regex }});
    return result;
}

const deleteSingleProductFromDB = async(productId: string) =>
{
 const result = await Products.findByIdAndDelete(productId);
 return result;

}

const updateSingleProductFromDB = async(productsId: string, productData: TProduct) =>{
    const id = new Types.ObjectId(productsId);
    const result = await Products.findByIdAndUpdate(id, { $set: productData }, { runValidators: true, new: true});
    if (!result) {
        throw new Error('Product not found');
    }
    return result;
}

export const ProductServices = {
    createProductInDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    getSingleProductByName,
    deleteSingleProductFromDB,
    updateSingleProductFromDB
}