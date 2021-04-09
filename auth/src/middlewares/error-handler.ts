import { Request, Response, NextFunction } from 'express';

import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

// Has intricate knowledge of how to extract information from every error
export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  
  // Checks if error is of type RequestValidationError
  if (err instanceof RequestValidationError) {
    // Calls serializaErrors method, insert into errors object, send back to user
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // Checks if error is of type DatabaseConnectionError
  if (err instanceof DatabaseConnectionError) {
    // Calls serializaErrors method, insert into errors object, send back to user
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong!'}]
  });
};