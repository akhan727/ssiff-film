import { CustomError, CommonErrorStructure } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Unauthorized');
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeError(): CommonErrorStructure {
    return {
      errors: [{ message: 'Unauthorized' }],
    };
  }
}
