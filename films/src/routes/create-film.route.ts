import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@ssiff-film/common';
import { Film } from '../models/film.model';

const router = express.Router();

router.post(
  '/api/films',
  requireAuth,
  [
    body('filmId').not().isEmpty().withMessage('Film ID is required!'),
    body('title').not().isEmpty().withMessage('Film title is required!'),
    body('country').not().isEmpty().withMessage('Country is required!'),
    body('releaseYear')
      .not()
      .isEmpty()
      .withMessage('Release year is required!'),
    body('director').not().isEmpty().withMessage('Director is required!'),
    body('screenwriter')
      .not()
      .isEmpty()
      .withMessage('Screenwriter is required!'),
    body('runtime').not().isEmpty().withMessage('Runtime is required!'),
    body('synopsis').not().isEmpty().withMessage('Synopsis is required!'),
    body('poster').not().isEmpty().withMessage('Poster url is required!'),
    body('backdrop').not().isEmpty().withMessage('Backdrop url is required!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      filmId,
      title,
      country,
      releaseYear,
      director,
      screenwriter,
      runtime,
      synopsis,
      poster,
      backdrop,
    } = req.body;

    const film = Film.build({
      filmId,
      title,
      country,
      releaseYear,
      director,
      screenwriter,
      runtime,
      synopsis,
      poster,
      backdrop,
      userId: req.currentUser!.id,
    });
    await film.save();

    res.status(201).send(film);
  }
);

export { router as createFilmRouter };
