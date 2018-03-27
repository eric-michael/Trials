var express = require('express');
var router = express.Router();

// import list of fake people from mocks
const mocks = require('../mocks.ts');
const numUsers = 5;
const people = mocks.generateUsers(numUsers);

// details on page
var config = {
  title: "Users",
  message: "Listing users"
}

router.route('/')
  .get( (request, response) => {
    response.render('users', config);
    console.log(config.message);
  });

module.exports = router;
