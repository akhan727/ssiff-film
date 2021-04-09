import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

// Has intricate knowledge of how to extract information from every error
export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  
  // Checks if err is of type CustomError
  if (err instanceof CustomError) {
    // Calls serializeErrors method, inserts results into errors object, sends back to user
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong!'}]
  });
};