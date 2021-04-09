import { Request, Response, NextFunction } from 'express';

import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    // Creates a 'common error response structure' of message and field.
    // Maps over each error in errors array,
    // from RequestValidationError > express-validator,
    // and returns a structure of message and field.
    const formatedErrors = err.errors.map(error => {
      return { message: error.msg, field: error.param};
    });
    // Returns 'common error response structure' to user
    return res.status(400).send({ errors: formatedErrors });
  }

  if (err instanceof DatabaseConnectionError) {
    // Returns 'reason' string from DatabaseConnectionError
    return res.status(500).send({ errors: [{ message: err.reason }] });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong!'}]
  });
};