var express = require('express');
var router = express.Router();

router.route('/')
  .get( (request, response) => {
    console.log('Hello, there!');
    response.send('<h1>Hello, world!</h1>');
  });

module.exports = router;
