// entry point for our application
const express = require('express');
const routes = require('./routes/routing');

// body-parser module is responsible for parsing the incoming request body in middleware.
const bodyParser = require('body-parser');

// app is an instance of express. 
const app = express();

// middleware for exposing data on req.body
app.use(bodyParser.urlencoded({ extended: true }));

// to use static files like css, pics, other assets 
app.use(express.static('public'));

// using routes middleware
app.use('/', routes);

// starting our application @ Port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});