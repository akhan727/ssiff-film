import { TicketDocument } from '../models/ticket.model';

export interface CreateTicketDto {
  movieId: string;
  movieTitle: string;
  country: string;
  year: number;
  director: string;
  runtime: number;
  synopsis: string;
  backdrop: string;
  season: string;
  venue: string;
  datetime: Date;
  price: number;
}

export interface CreateTicketResponse extends TicketDocument {}

export type GetTicketsResponse = TicketDocument[];

export interface UpdateTicketDto extends Partial<CreateTicketDto> {}

export type UpdateTicketResponse = CreateTicketResponse;
