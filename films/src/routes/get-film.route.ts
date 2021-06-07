import express, { Request, Response } from 'express';
import { NotFoundError } from '@ssiff-film/common';
import { Film } from '../models/film.model';

const router = express.Router();

router.get('/api/films/:id', async (req: Request, res: Response) => {
  const film = await Film.findById(req.params.id);

  if (!film) {
    throw new NotFoundError();
  }

  res.send(film);
});

export { router as showFilmRouter };
