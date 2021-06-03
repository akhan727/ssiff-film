interface CurrentUser {
  email: string;
  id: string;
}

interface CurrentUserResponse {
  currentUser: CurrentUser | null;
}

interface SignInRequestBody {
  email: string;
  password: string;
}

interface SignInResponse {
  email: string;
  id: string;
}

interface SignUpRequestBody {
  email: string;
  password: string;
}

interface SignUpResponse {
  email: string;
  id: string;
}

interface SignOutRequestBody {}

interface SignOutResponse {}

interface Movie {
  backdrop_path: string | null;
  poster_path: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  production_countries: Countries[];
  release_date: string;
  runtime: number;
  title: string;
}

interface Crew {
  credit_id: string;
  department: string;
  genre: number | null;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
}

interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
}
