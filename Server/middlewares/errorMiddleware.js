import { StatusCodes } from "http-status-codes";

export const errorLogger = (err, req, res, next) => {
  console.error(err);
  next(err);
};

export const errorMiddleware = (err, req, res, next) => {
  res.status(err.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR).send({
    errorName: err.name ?? "server error",
    errorMessage: err.message,
  });
};
