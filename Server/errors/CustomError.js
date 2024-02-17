export const customError = (name, message, statusCode) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.name = name;
  
    return error;
  };
  