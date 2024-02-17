import express from "express";
import { errorMiddleware, errorLogger } from "./middlewares/errorMiddleware.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.use(errorLogger);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
