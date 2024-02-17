import express from "express";
import { getProductsHandler } from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProductsHandler);

export default router;
