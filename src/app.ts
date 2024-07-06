import express, { Request, Response } from "express";
import cors from "cors";
import {productRoutes} from "./app/modules/product/product.route"
import { orderRoutes } from "./app/modules/order/order.route";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/products",  productRoutes)
app.use("/api/orders", orderRoutes);

// application routes
// app.use("/api/v1", router);



app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
