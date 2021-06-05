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

interface CreateFilmRequestBody {
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

interface Film {
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
  userId: string;
  id: string;
}

type CreateFilmResponse = Film;

type GetFilmsResponse = Film[];
