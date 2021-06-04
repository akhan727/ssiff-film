import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@ssiff-film/common';
import { Ticket } from '../models/ticket.model';

const router = express.Router();

router.post(
  '/api/tickets',
  requireAuth,
  [
    body('movieId').not().isEmpty().withMessage('Movie ID is required!'),
    body('movieTitle').not().isEmpty().withMessage('Movie title is required!'),
    body('country').not().isEmpty().withMessage('Country is required!'),
    body('year').not().isEmpty().withMessage('Year is required!'),
    body('director').not().isEmpty().withMessage('Director is required!'),
    body('runtime').not().isEmpty().withMessage('Runtime is required!'),
    body('synopsis').not().isEmpty().withMessage('Synopsis is required!'),
    body('backdrop').not().isEmpty().withMessage('Backdrop is required!'),
    body('season').not().isEmpty().withMessage('Season is required!'),
    body('venue').not().isEmpty().withMessage('Venue is required!'),
    body('datetime').not().isEmpty().withMessage('Date and time is required!'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be greater than 0!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      movieId,
      movieTitle,
      country,
      year,
      director,
      runtime,
      synopsis,
      backdrop,
      season,
      venue,
      datetime,
      price,
    } = req.body;

    const ticket = Ticket.build({
      movieId,
      movieTitle,
      country,
      year,
      director,
      runtime,
      synopsis,
      backdrop,
      season,
      venue,
      datetime,
      price,
      userId: req.currentUser!.id,
    });
    await ticket.save();

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
