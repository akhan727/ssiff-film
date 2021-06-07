import request from 'supertest';
import { app } from '../../app';
import { createFilm } from './create-film.route.test';

export const getFilm = async (id: string) => {
  return await request(app).get(`/api/films/${id}`).send({}).expect(200);
};

describe('Specific film retrieval: GET /api/films/:id', () => {
  const baseEndpoint = '/api/films';

  it('returns a 404 if the film is not found', async () => {
    await request(app)
      .get(`${baseEndpoint}/0b2217b32b44093978aa7978`)
      .send()
      .expect(404);
  });

  it('returns an error if the given id is not a mongo id', async () => {
    await request(app).get(`${baseEndpoint}/_invalid_id_`).send().expect(404);
  });

  it('returns the film if the film is found', async () => {
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

    // Create new film as authorized user
    const response = await createFilm(
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

    const { body } = await getFilm(response.body.id);
    expect(body.filmId).toEqual(newFilm.filmId);
    expect(body.title).toEqual(newFilm.title);
    expect(body.country).toEqual(newFilm.country);
    expect(body.releaseYear).toEqual(newFilm.releaseYear);
    expect(body.director).toEqual(newFilm.director);
    expect(body.runtime).toEqual(newFilm.runtime);
    expect(body.synopsis).toEqual(newFilm.synopsis);
    expect(body.backdrop).toEqual(newFilm.backdrop);
    //expect(body.schedules).toEqual(newFilm.schedules);
  });
});
