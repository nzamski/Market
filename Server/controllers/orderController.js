import { StatusCodes } from "http-status-codes";
import { customError } from "../errors/CustomError.js";
import { addNewOrder } from "../services/orderService.js";

const submitOrderHandler = async (req, res, next) => {
  try {
    const orders = await addNewOrder(req.body);

    res.status(StatusCodes.OK).send(orders);
  } catch (error) {
    next(
      customError(
        "orders-error",
        "Failed to post orders",
        StatusCodes.InternalServerError
      )
    );
  }
};

export { submitOrderHandler };
