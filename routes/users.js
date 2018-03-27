var express = require('express');
var router = express.Router();
var path = require('path');

// import list of fake people from mocks
const mocks = require('../mocks.ts');
const numUsers = 5;
const people = mocks.generateUsers(numUsers);

router.route('/')
  .get( (request, response) => {
    response.sendFile(path.join(__dirname, '../public', 'users.html'));
    console.log('Listing users');
  });

module.exports = router;
