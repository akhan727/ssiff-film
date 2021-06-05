import { FilmDocument } from '../models/film.model';

export interface CreateFilmDto {
  filmId: string;
  title: string;
  country: string;
  releaseYear: string;
  director: string;
  screenwriter: string;
  runtime: number;
  synopsis: string;
  poster: string;
  backdrop: string;
}

export interface CreateFilmResponse extends FilmDocument {}

export type GetFilmsResponse = FilmDocument[];

export interface UpdateFilmDto extends Partial<CreateFilmDto> {}

export type UpdateFilmResponse = CreateFilmResponse;
