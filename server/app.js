const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const meals = require('./routes/meals');

const cors = require('cors')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', meals);

app.listen(3000, function(){
  console.log('App is now listening on port 3000');
})

module.exports = app;
