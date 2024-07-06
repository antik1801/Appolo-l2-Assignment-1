import { z } from "zod";


// variant schema 
const VariantValidationSchema = z.object({
    type: z.string(),
    value: z.string()
});

// Inventory validation schema
const InventoryValidationSchema = z.object({
    quantity: z.number().nonnegative(),
    inStock: z.boolean()
});

// product validation schema
const ProductValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().nonnegative(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(VariantValidationSchema),
    inventory: InventoryValidationSchema
});


export default ProductValidationSchema;