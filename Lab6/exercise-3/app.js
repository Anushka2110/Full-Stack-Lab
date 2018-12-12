var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://college:college@ds125932.mlab.com:25932/testdb');

var Schema = mongoose.Schema;

var userSchema = new Schema({ name: String, status: String });

var User = mongoose.model('User', userSchema);

var john = User({ name: 'John', status: 'active'});

john.save(function(err) {
    if (err) throw err;

    console.log('**** User saved! *****');
  });

var port = process.env.PORT || 3000;
app.listen(port);

