import * as http from 'http';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as meetingModel from './model/meeting';
import * as noteModel from './model/note';
import * as userModel from './model/user';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {apiRouter} from './api/router';
var config = require('./config/config');

var dbServerUrl = [config.dbserver.host, config.dbserver.port].join(':');
var dbUrl = path.join(dbServerUrl, config.dbserver.db);

var app = express();
mongoose.connect(dbUrl, (err) => {
  if (err) throw err;

  app.listen(config.app.port);
  console.log('Listening on port', config.app.port);
});

app
  .use(express.static(path.join(__dirname, 'public')))
  .use('/api', apiRouter);

/*mongoose.connect(uristring, (err, res) => {
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
})*/