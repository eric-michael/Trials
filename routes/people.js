var express = require('express');
var router = express.Router();

// import list of fake people from mocks
var people = require('../mocks.ts');

router.route('/')
  .get( (request, response) => {
    console.log('Listing people');
    response.json(people);
  });

module.exports = router;
