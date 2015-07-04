'use strict';

// All future modules will be loaded in strict mode.
require('use-strict');

var express = require('express');
var path = require('path');

var app = express();

// Set the view engine to ejs.
app.set('view engine', 'ejs');

// Public folder for assets.
app.use(express.static(path.join(__dirname, 'public')));

// Routes.
app.get('/', function(req, res) {
  res.render('pad');
});

// Start the server.
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('App listening on port %s', port);
});
