import request from 'supertest';
import { app } from '../../app';
import { Schedules } from '../../dtos/films.dto';
import { Film } from '../../models/film.model';

export const createFilm = (
  filmId?: string,
  title?: string,
  country?: string,
  releaseYear?: string,
  director?: string,
  runtime?: number,
  synopsis?: string,
  backdrop?: string,
  //schedules?: Array<Schedules>,
  email?: string,
  auth: boolean = true
) =>
  request(app)
    .post('/api/films')
    .set(
      'Cookie',
      auth ? global.getAuthCookie(email ? email : 'test@test.com') : []
    )
    .send({
      filmId,
      title,
      country,
      releaseYear,
      director,
      runtime,
      synopsis,
      backdrop,
    });

describe('Film creation: POST /api/films', () => {
  it('has a route handler listening to /api/films for post requests', async () => {
    const response = await createFilm(
      'filmId',
      'title',
      'country',
      '2000',
      'director',
      100,
      'synopsis',
      'url'
    );
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if the user is signed in', async () => {
    await createFilm(
      'filmId',
      'title',
      'country',
      '2000',
      'director',
      100,
      'synopsis',
      'url',
      //undefined,
      undefined,
      false
    ).expect(401);
  });

  it('returns a status other than 401 if user is signed in', async () => {
    const response = await createFilm(
      'filmId',
      'title',
      'country',
      '2000',
      'director',
      100,
      'synopsis',
      'url'
    );
    expect(response.status).not.toEqual(401);
  });

  it('returns an error if an invalid filmId is provided', async () => {
    await createFilm(
      '',
      'title',
      'country',
      '2000',
      'director',
      100,
      'synopsis',
      'url'
      //[]
    ).expect(400);

    await createFilm(
      undefined,
      'title',
      'country',
      '2000',
      'director',
      100,
      'synopsis',
      'url'
      //[]
    ).expect(400);
  });

  it('returns an error if an invalid runtime is provided', async () => {
    await createFilm(
      'filmId',
      'title',
      'country',
      '2000',
      'director',
      undefined,
      'synopsis',
      'url'
      //[]
    ).expect(400);
  });

  it('creates a film with valid inputs', async () => {
    const newFilm = {
      filmId: 'filmId',
      title: 'title',
      country: 'country',
      releaseYear: '2000',
      director: 'director',
      runtime: 100,
      synopsis: 'synopsis',
      backdrop: 'url',
      //schedules: [],
    };
    let films = await Film.find({});
    expect(films.length).toEqual(0);

    await createFilm(
      newFilm.filmId,
      newFilm.title,
      newFilm.country,
      newFilm.releaseYear,
      newFilm.director,
      newFilm.runtime,
      newFilm.synopsis,
      newFilm.backdrop
      //newFilm.schedules
    ).expect(201);

    films = await Film.find({});
    expect(films.length).toEqual(1);
    expect(films[0].filmId).toEqual(newFilm.filmId);
    expect(films[0].title).toEqual(newFilm.title);
    expect(films[0].country).toEqual(newFilm.country);
    expect(films[0].releaseYear).toEqual(newFilm.releaseYear);
    expect(films[0].director).toEqual(newFilm.director);
    expect(films[0].runtime).toEqual(newFilm.runtime);
    expect(films[0].synopsis).toEqual(newFilm.synopsis);
    expect(films[0].backdrop).toEqual(newFilm.backdrop);
    //expect(films[0].schedules).toEqual(newFilm.schedules);
  });
});
