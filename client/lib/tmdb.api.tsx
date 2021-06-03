import axios from 'axios';

interface Movie {}
interface Crew {}
interface Cast {}

const instance = axios.create({
  baseURL: process.env.TMDB_API_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

export async function getMovieDetails(id: string): Promise<Movie> {
  type Response = Movie;

  const res = await instance.get<Response>(`/movie/${id}`);
  return res.data;
}

export async function getCredits(
  id: string
): Promise<{ cast: Cast[]; crew: Crew[] }> {
  type Response = {
    id: number;
    cast: Cast[];
    crew: Crew[];
  };

  const res = await instance.get<Response>(`/movie/${id}/credits`);
  return { cast: res.data.cast, crew: res.data.crew };
}
