# Production link : https://appolo-l2-assignment-1.vercel.app/ 



# Requirements analysis: 




















Assignment 1
Assignment link : https://github.com/Apollo-Level2-Web-Dev/batch-3-assignment-2 

My github link: https://github.com/antik1801/Appolo-l2-Assignment-1 

Requirements: 
Express application
Mongodb
Typescript
Joi / Zod validation

Project setup:
Express database
Mongodb database for storing Product and Order

E-Commerce product data model: 

name: (string)
description : (string)
price: (number)
category: (string)
tags: (array of strings) [search keywords]
variant: (array of objects) 
An array that contains different variants of options / products , such as size colour or style.
inventory: (object)
Quantity:(number) → the quantity of products in stock
isStock: (boolean) 


Marks distribution: 

Create Product : 
Create a new product : “/api/products” → POST

Sample request:

{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}


Sample Response: 

{
    "success": true,
    "message": "Product created successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}


Retrieve products:

Api: “/api/products” → GET

{
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
        {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "Samsung Galaxy S21",
            "description": "High-performance Android smartphone with advanced camera capabilities.",
            "price": 799,
            "category": "Electronics",
            "tags": ["smartphone", "Samsung", "Android"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Phantom Black"
                },
                {
                    "type": "Storage Capacity",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 30,
                "inStock": true
            }
        }
        // Additional products can be added here...
    ]
}


Retrieve a simple specific id:

api: “api/products/:productsId” → GET

{
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}



Update product: 
api: “/api/products/:productId” → PUT
Sample Data:

{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}


Sample response:
{
    "success": true,
    "message": "Product updated successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 49,
            "inStock": true
        }
    }
}


Delete a product: 
Api: “/api/products/:productId” - DELETE

{
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
 }
 
// The product should be deleted from the database.


6. Search a product : 

Api : “/api/products?searchTerm=iphone” → GET

{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}


Order Management

Create a new order: 

Api: “/api/orders” → POST

{
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
}

Response: 

{
    "success": true,
    "message": "Order created successfully!",
    "data": {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
    }
}


Retrieve all orders:
api : “/api/orders” → GET

{
    "success": true,
    "message": "Orders fetched successfully!",
    "data": [
        {
            "email": "level2@programming-hero.com",
            "productId": "5fd67e890b60c903cd8544a3",
            "price": 999,
            "quantity": 1
        }
        // more orders...
    ]
}

Retrieve orders by user email: 
api: “/api/orders?email=level2@programming-hero.com” → GET

Response: 
{
    "success": true,
    "message": "Orders fetched successfully for user email!",
    "data": [
        {
            "email": "level2@programming-hero.com",
            "productId": "5fd67e890b60c903cd8544a3",
            "price": 999,
            "quantity": 1
        }
        // more orders for the user...
    ]
}




Bonus Marks: 

When creating new order (/api/orders). Reduced the quantity of order products in inventory and update the instack property.

Inventory management logic:
When new order is created the system should check the available quantity of the product in the inventory.
If the order quantity exceeds available quantity return an error.
Update the inventory quantity and instocks products.
If the inventory quantity reaches 0, isStack: false , otherwise true.

Error Handle: 
Sample error responses:
{
    "success": false,
    "message": "Insufficient quantity available in inventory"
}

Not Found: 
{
 "success": false,
 "message": "Order not found"
}

Not Found Route: 
{
 "success": false,
 "message": "Route not found"
}



Zod / Joi token: 
Handle Zod validation 
Send the Zod error

Instructions: 
Clean , Modular and organised code
Consistency naming convention for variables, functions and routes
Name reflects the purpose of the variables , functions , routes

Comments: 
Inline comments 


Api endpoints:
Follow api endpoints and naming conventions
Request and responses follows the specific outlines

Validations: 
Joi/Zod validation for user and order
Meaningful error message for response 
Error handling → user not found , validation error

Tools and libraries:
Avoid chat gpt
Avoid unnecessary library installation

Coding style: 
Linting tools (ESLINT) 
Ensure at least 10 commits in github


Share links: 
Github links
Live deployment links
Readme file that will be detailed about the project


Submission format: 
Github Repository (Url): 
Live server link :


Time frame and deadlines

Step 1: Setup the project →

I have setup the project from the template → https://github.com/antik1801/Project_setup 

St 2: install npm 
Npm install


St 3: Connect the DB link to the .env file

https://cloud.mongodb.com/v2/64573d539de82c7252509290#/overview → connect → copy the driver link

Paste to the .env
Create a database user →
userName: Appolo-l2-Assignment1
password: 0i1h0BNx4Ipc6jc4
dbName: Assignment1
Url: mongodb+srv://Appolo-l2-Assignment1:0i1h0BNx4Ipc6jc4@cluster0.zycuvps.mongodb.net/Assignment1?retryWrites=true&w=majority&appName=Cluster0


Run the server using → npm run start:dev



Products:
product.interface.ts
product.model.ts
product.validation.ts
product.service.ts
product.controller.ts
product.route.ts
Product.interface.ts →



export type TVariants={
    type: string;
    value: string;
}


export type TInventory = {
    quantity: number;
    inStock: boolean;
}


export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariants;
    inventory: TInventory;
}


product.model.ts → 

import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";


const VariantSchema = new Schema<TVariants>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})


const InventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})
const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    variants:{
        type: [VariantSchema],
        required: true
    },
    inventory:{
        type: InventorySchema,
        required: true
    }
})
const Products = model<TProduct>('Products', ProductSchema);




Product.validation.ts →
Install zod  → https://zod.dev/?id=basic-usage 

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






product.service.ts →
import { TProduct } from "./product.interface"
import { Products } from "./product.model"


const createProductInDB = async(productData: TProduct) =>{
    const result = await Products.create(productData)
    return result
}


export const ProductServices = {
    createProductInDB
}






Orders: 




	
 
 
