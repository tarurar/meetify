import * as intf from './interfaces';
import * as mongoose from 'mongoose';
import * as userModel from './user';

export class Workspace implements intf.WorkspaceDataContract {
  name: string;
  administrator: intf.UserDataContract;
  secondaryAdministrator: intf.UserDataContract;
}

export var WorkspaceSchema = new mongoose.Schema({
  name: String,
  administrator: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  secondaryAdministrator: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})

export interface WorkspaceDocument extends Workspace, mongoose.Document { }

export var Workspaces = mongoose.model<WorkspaceDocument>('workspaces', WorkspaceSchema);