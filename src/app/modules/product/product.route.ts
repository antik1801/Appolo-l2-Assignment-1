import express from 'express'
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.createProduct)
router.get("/", ProductController.getAllProducts);
router.get("/:productsId", ProductController.getSingleProduct)
router.delete("/:productId", ProductController.deleteSingleProduct)
router.put("/:productsId", ProductController.updateSingleProductFromDB);
export const productRoutes = router;