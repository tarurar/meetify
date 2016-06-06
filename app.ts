import * as http from 'http';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as meetingModel from './model/meeting';
import * as noteModel from './model/note';
import * as userModel from './model/user';

var config = require('./config/config');

var dbServer = [config.dbserver.url, config.dbserver.port].join(':');
var uristring = path.join(dbServer, config.dbserver.db);

mongoose.connect(uristring, (err, res) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Successfully connected to database');
    
    let newMeeting = new meetingModel.Meetings({
      agenda: [
        {short: 'note1', text: 'note1 text'},
        {short: 'note2', text: 'note2 text'}
      ],
      created: Date.now(),
      createdBy: {name: 'Andrei'},
      modified: Date.now(),
      started: Date.now(),
      closed: Date.now()
    });
    
    newMeeting.save<meetingModel.Meeting>((err, res) => {
      if (err) {
        console.log('Error in newMeeting.save');
      } else {
        console.log('new meting created at:', res.created);
        mongoose.connection.close();
      }
    });
  }
})