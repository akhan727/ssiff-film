import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest, BadRequestError } from '@ssiff-film/common';
import { User } from '../models/user.model';
import { SignUpDto } from '../dtos/signup.dto';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  validateRequest,
  async (req: Request<{}, {}, SignUpDto>, res: Response) => {
    // Extract user input (email, password) from request
    const { email, password } = req.body;

    // Find if user email exists
    const existingUser = await User.findOne({ email });

    // Throws error is email entered already exists
    if (existingUser) {
      throw new BadRequestError('Email already exists!');
    }

    // Create and save new user to database
    const user = User.build({ email, password });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY! // ! is used to tell typescript nothing is wrong
    );

    // Store it on the session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
