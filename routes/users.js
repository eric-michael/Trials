var express = require('express');
var router = express.Router();

// import list of fake people from mocks
const mocks = require('../mocks.ts');
const numUsers = 5;
const people = mocks.generateUsers(numUsers);

router.route('/')
  .get( (request, response) => {
    response.send(people);
    console.log('Listing users');
  });

module.exports = router;
