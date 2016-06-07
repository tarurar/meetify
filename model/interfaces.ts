import * as mongoose from 'mongoose';

export interface MeetingDataContract {
  agenda: NoteDataContract[];
  created: Date;
  createdBy: UserDataContract;
  modified: Date;
  started: Date;
  closed: Date;
  workspace: WorkspaceDataContract;
}

export interface NoteDataContract {
  short: string;
  text: string;
}

export interface UserDataContract {
  name: string;
}

export interface WorkspaceDataContract {
  name: string;
  administrator: UserDataContract;
  secondaryAdministrator: UserDataContract;
}