import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  
  statusCode = 400;
  
  constructor(public errors: ValidationError[]) {
    super();
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    // Maps over each error in "errors" array...
    return this.errors.map(err => {
      // ...and returns a 'common error response structure' of message and field.
      return { message: err.msg, field: err.param };
    });
  }
}