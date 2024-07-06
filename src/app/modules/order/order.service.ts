import { TOrder } from "./order.interface";
import { Order } from "./order.model";


const createOrderInDB = async (orderData: TOrder) =>{

    const result = await Order.create(orderData);
    return result;
}



const getAllOrdersFromDB = async() =>{

    const result = await Order.find();
    return result;
}


const getAllOrdersFromUser = async (email: string) =>{
    const result = await Order.find({email});
    return result;
}


export const OrderServices = {
    createOrderInDB,
    getAllOrdersFromDB,
    getAllOrdersFromUser
}