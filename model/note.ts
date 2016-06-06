import * as intf from './interfaces';
import * as mongoose from 'mongoose';

export class Note implements intf.NoteDataContract {
  short: string;
  text: string;
}

export var noteSchema = new mongoose.Schema({
  short: String,
  text: String
});

export interface NoteDocument extends Note, mongoose.Document {
  
}

export var Notes = mongoose.model<NoteDocument>('notes', noteSchema);