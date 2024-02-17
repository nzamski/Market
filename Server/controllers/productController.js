import { StatusCodes } from "http-status-codes";
import { customError } from "../errors/CustomError.js";
import { getAllProducts } from "../services/productService.js";

const getProductsHandler = async (req, res, next) => {
  try {
    const products = await getAllProducts();

    res.status(StatusCodes.OK).send(products);
  } catch (error) {
    next(
      customError(
        "products-error",
        "Failed to get products",
        StatusCodes.InternalServerError
      )
    );
  }
};


export { getProductsHandler };
