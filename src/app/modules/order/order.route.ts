import express from 'express'
import { OrderController } from './order.controller';

const router = express.Router();

router.post("/", OrderController.createOrders);
router.get("/", OrderController.getAllOrders);

export const orderRoutes = router;