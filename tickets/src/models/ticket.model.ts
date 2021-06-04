import { Model, Document, Schema, model } from 'mongoose';
import { CreateTicketDto } from '../dtos/tickets.dto';

// Properties that are required to create a new Ticket
interface TicketAttrs extends CreateTicketDto {
  userId: string;
}

// Properties that a Ticket Document (a single Ticket) has
export interface TicketDocument extends Document, TicketAttrs {
  //version: number;
  orderId?: string;
}

// Properties that a Ticket Model (entire collection of Tickets) has
interface TicketModel extends Model<TicketDocument> {
  build(attrs: TicketAttrs): TicketDocument;
}

// Schema (JSON object) to define structure of the document
const ticketSchema = new Schema<TicketDocument, TicketModel>(
  {
    movieId: {
      type: String,
      required: true,
    },
    movieTitle: {
      type: String,
      default: undefined,
    },
    country: {
      type: String,
      default: undefined,
    },
    year: {
      type: Number,
      default: undefined,
    },
    director: {
      type: String,
      default: undefined,
    },
    runtime: {
      type: Number,
      default: undefined,
    },
    synopsis: {
      type: String,
      default: undefined,
    },
    backdrop: {
      type: String,
      default: undefined,
    },
    season: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
    },
  },
  {
    optimisticConcurrency: true,
    versionKey: 'version',
    toJSON: {
      transform: (document: TicketDocument, ret: Partial<TicketDocument>) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

// Add build function to schema
ticketSchema.statics.build = (attrs: TicketAttrs) => new Ticket(attrs);

// Creates Mongoose Ticket model
export const Ticket = model<TicketDocument, TicketModel>(
  'Ticket',
  ticketSchema
);
