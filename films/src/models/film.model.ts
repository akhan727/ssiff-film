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
      default: undefined,
    },
    country: {
      type: String,
      default: undefined,
    },
    releaseYear: {
      type: String,
      default: undefined,
    },
    director: {
      type: String,
      default: undefined,
    },
    screenwriter: {
      type: String,
      required: undefined,
    },
    runtime: {
      type: Number,
      default: undefined,
    },
    synopsis: {
      type: String,
      default: undefined,
    },
    poster: {
      type: String,
      required: true,
    },
    backdrop: {
      type: String,
      default: undefined,
    },
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
