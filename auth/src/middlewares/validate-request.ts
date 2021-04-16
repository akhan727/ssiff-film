import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  // Extracts validation errors from request, if any
  const errors = validationResult(req);

  // Throws error if validation error exists
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};