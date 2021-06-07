import express, { Request, Response } from 'express';
import { Film } from '../models/film.model';

const router = express.Router();

router.get('/api/films', async (req: Request, res: Response) => {
  const films = await Film.find({});

  res.send(films);
});

export { router as indexFilmRouter };
