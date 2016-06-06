import * as intf from './interfaces';
import * as mongoose from 'mongoose';

export class User implements intf.UserDataContract {
  name: string;
}

export var userSchema = new mongoose.Schema({
  name: String
});

export interface UserDocument extends User, mongoose.Document {
  
}

export var Users = mongoose.model<UserDocument>('users', userSchema);