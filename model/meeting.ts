import * as intf from './interfaces';
import * as mongoose from 'mongoose';
import * as nodeModel from './note';
import * as userModel from './user';

export class Meeting implements intf.MeetingDataContract {
  agenda: Array<intf.NoteDataContract>;
  created: Date;
  createdBy: intf.UserDataContract;
  modified: Date;
  started: Date;
  closed: Date; 
}

export var meetingSchema = new mongoose.Schema({
  agenda: [nodeModel.noteSchema],
  cerated: Date,
  createdBy: userModel.userSchema,
  modified: Date,
  started: Date,
  closed: Date
})

export interface MeetingDocument extends Meeting, mongoose.Document {
  
}

export var Meetings = mongoose.model<MeetingDocument>('meetings', meetingSchema);