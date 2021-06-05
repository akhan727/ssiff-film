import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError,
  BadRequestError,
} from '@ssiff-film/common';
import { Film } from '../models/film.model';

const router = express.Router();

router.put(
  '/api/films/:id',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be provided and must be greater than 0'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const film = await Film.findById(req.params.id);

    if (!film) {
      throw new NotFoundError();
    }

    if (film.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    film.set({
      title: req.body.title,
      price: req.body.price,
    });
    await film.save();

    res.send(film);
  }
);

export { router as updateFilmRouter };
