import express from "express";
import {
  submitOrderHandler
} from "../controllers/orderController.js";

const router = express.Router();
router.route("/").post(submitOrderHandler);

export default router;
