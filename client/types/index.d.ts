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

interface Schedules {
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

interface CreateFilmRequestBody {
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

interface Film {
  filmId: string;
  title: string;
  country: string;
  releaseYear: string;
  director: string;
  runtime: number;
  synopsis: string;
  backdrop: string;
  schedules: Array<Schedules>;
  userId: string;
  id: string;
}

type CreateFilmResponse = Film;

type GetFilmsResponse = Film[];
