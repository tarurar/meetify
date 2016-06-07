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
  administrator: userModel.userSchema,
  secondaryAdministrator: userModel.userSchema
})

export interface WorkspaceDocument extends Workspace, mongoose.Document {}

export var Workspaces = mongoose.model<WorkspaceDocument>('workspaces', WorkspaceSchema);