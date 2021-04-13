import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.model';
import { RequestValidationError } from '../errors/request-validation-error';
import { BadRequestError } from '../errors/bad-request-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!')
  ],
  async (req: Request, res: Response) => {
    
    // Validates format of user input (email and password)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    
    // Find if user email exists
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    
    // Throws error is email entered already exists
    if ( existingUser ) {
      throw new BadRequestError('Email already exists!');
    }

    // Create and save new user to database
    const user = User.build({ email, password });
    await user.save();

    // Generate JWT
    const userJWT = jwt.sign(
      {
        id: user.id,
        email: user.email
      }, 
      process.env.JWT_KEY!
    );

    // Store it on the session object
    req.session = {
      jwt: userJWT
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };