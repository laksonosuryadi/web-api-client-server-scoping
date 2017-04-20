var express = require('express');
var router = express.Router();
var getMeals = require('../models/meal');

router.get('/', function(req, res){
  res.send(getMeals.list())
})

module.exports = router;
