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
 const id = new Types.ObjectId(productId);
 const result = await Products.findByIdAndDelete(id);
 return result;

}

const updateSingleProductFromDB = async(productsId: string, productData: TProduct) =>{
    const id = new Types.ObjectId(productsId);
    const result = await Products.findByIdAndUpdate(id, { $set: productData }, { runValidators: true});
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