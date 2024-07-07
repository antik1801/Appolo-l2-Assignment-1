import { Request, Response } from "express";
import ProductValidationSchema from "./product.validation";
import { ProductServices } from "./product.service";


const createProduct = async (req: Request, res: Response) => {
    try {

        const productData = req.body;
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


const getAllProducts = async (req: Request, res: Response) => {
    try {

        const name = req.query.searchTerm as string;

        if (!name) {
            const result = await ProductServices.getAllProductsFromDB();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            })
        }
        else {
            const result = await ProductServices.getSingleProductByName(name);
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            })
        }


    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
}


const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productsId } = req.params;
        const result = await ProductServices.getSingleProductFromDB(productsId)
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

const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deleteSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Single product deleted successfully",
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


const updateSingleProductFromDB = async (req:Request, res:Response) =>{
    try {
        const productData = req.body;
        const {productsId} = req.params;
        const zodParseData = ProductValidationSchema.parse(productData);
        const result = await ProductServices.updateSingleProductFromDB(productsId, zodParseData);

        res.status(200).json({
            success: true,
            message: "Single product updated successfully",
            data: result
        })
    } catch (err:any) {
        if (err.name === 'ZodError') {
            res.status(400).json({
              success: false,
              message: "Validation error",
              error: err.errors
            });
          } else if (err.kind === 'ObjectId') {
            res.status(400).json({
              success: false,
              message: "Invalid product ID",
              error: err.message
            });
          } else {
            res.status(500).json({
              success: false,
              message: "Something went wrong",
              error: err.message
            });
          }
    }
}

export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProductFromDB
}