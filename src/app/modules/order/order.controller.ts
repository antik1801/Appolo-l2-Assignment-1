import { Request, Response } from "express";
import OrderValidationSchema from "./order.validation";
import { OrderServices } from "./order.service";




const createOrders = async(req: Request, res: Response) =>{
    try {
        const orderData = req.body;
        const zodParseData = OrderValidationSchema.parse(orderData);

        const result = await OrderServices.createOrderInDB(zodParseData);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
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

const getAllOrders = async(req: Request, res: Response) =>{
    try {
        const email = req.query.email as string;
        if(!email)
        {
            const result = await OrderServices.getAllOrdersFromDB();
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            })
        }
        else
        {
            const result = await OrderServices.getAllOrdersFromUser(email);
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
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


const getAllOrdersByUser = async (req: Request, res: Response) =>{
    try {
        const email = req.query.email as string;
        if(!email){
            throw new Error("Email is required");
        }
        const result = await OrderServices.getAllOrdersFromUser(email);

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
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




export const OrderController = {
    createOrders,
    getAllOrders,
    getAllOrdersByUser
}