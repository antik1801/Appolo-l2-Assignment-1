import { Request, Response } from "express";
import ProductValidationSchema from "./product.validation";
import { ProductServices } from "./product.service";


const createProduct = async(req: Request, res: Response) =>{
    try {
        
        const  productData = req.body;
        const zodParseData = ProductValidationSchema.parse(productData);

        const result = await ProductServices.createProductInDB(zodParseData)

        res.status(200).json({
            success: true,
            message: "Products are created successfully",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}


const getAllProducts = async (req: Request, res: Response) =>{
    try {
        const result = await ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}


export const ProductController = {
    createProduct,
    getAllProducts
}