import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";


const OrderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

OrderSchema.pre('save',async function (next){
    console.log(this);
next();
})

export const Order = model<TOrder>('Order', OrderSchema)