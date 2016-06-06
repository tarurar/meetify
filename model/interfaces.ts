import * as mongoose from 'mongoose';

export interface MeetingDataContract {
  agenda: NoteDataContract[];
  created: Date;
  createdBy: UserDataContract;
  modified: Date;
  started: Date;
  closed: Date;
}

export interface NoteDataContract {
  short: string;
  text: string;
}

export interface UserDataContract {
  name: string;
}