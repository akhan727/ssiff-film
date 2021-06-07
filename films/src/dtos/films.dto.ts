import { FilmDocument } from '../models/film.model';

export interface Schedules {
  scheduleId: String;
  venueId: String;
  venueName: String;
  venueAddress: String;
  datetime: String;
  roomName: Number;
  roomCapacity: Number;
  seatsEmpty: Number;
  seatsOccupied: Number;
  price: Number;
}

export interface CreateFilmDto {
  filmId: string;
  title: string;
  country: string;
  releaseYear: string;
  director: string;
  runtime: number;
  synopsis: string;
  backdrop: string;
  schedules: Array<Schedules>;
}

export interface CreateFilmResponse extends FilmDocument {}

export type GetFilmsResponse = FilmDocument[];

export interface UpdateFilmDto extends Partial<CreateFilmDto> {}

export type UpdateFilmResponse = CreateFilmResponse;
