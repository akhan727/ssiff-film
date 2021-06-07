import { Model, Document, Schema, model } from 'mongoose';
import { CreateFilmDto } from '../dtos/films.dto';

// Properties that are required to create a new Film
interface FilmAttrs extends CreateFilmDto {
  userId: string;
}

// Properties that a Film Model (entire collection of Films) has
interface FilmModel extends Model<FilmDocument> {
  build(attrs: FilmAttrs): FilmDocument;
}

// Properties that a Film Document (a single Film) has
export interface FilmDocument extends Document, FilmAttrs {}

// Schema (JSON object) to define structure of the document
const filmSchema = new Schema<FilmDocument, FilmModel>(
  {
    filmId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: undefined,
    },
    country: {
      type: String,
      required: true,
      default: undefined,
    },
    releaseYear: {
      type: String,
      required: true,
      default: undefined,
    },
    director: {
      type: String,
      required: true,
      default: undefined,
    },
    runtime: {
      type: Number,
      required: true,
      default: undefined,
    },
    synopsis: {
      type: String,
      required: true,
      default: undefined,
    },
    backdrop: {
      type: String,
      required: true,
      default: undefined,
    },
    schedules: [
      {
        scheduleId: String,
        venueId: String,
        venueName: String,
        venueAddress: String,
        datetime: String,
        roomName: Number,
        roomCapacity: Number,
        seatsEmpty: Number,
        seatsOccupied: Number,
        price: Number,
      },
    ],
  },
  {
    optimisticConcurrency: true,
    versionKey: 'version',
    toJSON: {
      transform: (document: FilmDocument, ret: Partial<FilmDocument>) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

// Add build function to schema
filmSchema.statics.build = (attrs: FilmAttrs) => new Film(attrs);

// Creates Mongoose Film model
export const Film = model<FilmDocument, FilmModel>('Film', filmSchema);
