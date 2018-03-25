var express = require('express');
var router = express.Router();

router.route('/')
  .get( (request, response) => {
    console.log('A visitor!');
    response.send('<h1>Welcome to the home page</h1>');
  });

module.exports = router;
