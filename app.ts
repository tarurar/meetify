import * as http from 'http';
import * as mongoose from 'mongoose';
import * as path from 'path';
var config = require('./config/config');

var server = [config.dbserver.url, config.dbserver.port].join(':');
var uristring = path.join(server, config.dbserver.db);

mongoose.connect(uristring, (err, res) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Successfully connected to database');

    /*var userSchema = new mongoose.Schema({
      name: {
        first: String,
        last: { type: String, trim: true }
      },
      age: { type: Number, min: 0 }
    });

    var uSchema = new mongoose.Schema({
      name: String
    });

    var people = mongoose.model('people', uSchema);
    var u1 = new people({
      name: 'Bond'
    });*/
    
    var dogSchema = new mongoose.Schema({
      name: String
    });
    
    var dog = mongoose.model('dogs', dogSchema);
    var d1 = new dog({
      name: 'Lucky'
    });

    d1.save((err, res) => {
      if (err) {
        console.log('Error on save');
      } else {
        console.log('Successfully saved');
      }
    });
  }
})