import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string(),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().positive({ message: "Quantity must be a positive number" })
});

export default OrderValidationSchema;