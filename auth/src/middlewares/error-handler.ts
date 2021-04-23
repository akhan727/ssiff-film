import { NextFunction, Request, Response } from 'express';
import { CustomError, CommonErrorStructure } from '../errors/custom-error';
import { UnknownError } from '../errors/unknown-error';

// Has intricate knowledge of how to extract information from every error
export function errorHandler(
  err: Error,
  req: Request,
  res: Response<CommonErrorStructure>,
  next: NextFunction
) {
  // Checks if err is of type CustomError
  if (err instanceof CustomError) {
    // Calls serializeErrors method, inserts results into errors object, sends back to user
    return res.status(err.statusCode).send(err.serializeError());
  }

  console.error(err);
  const { statusCode, serializeError } = new UnknownError();
  res.status(statusCode).send(serializeError());
}
