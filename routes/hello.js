var express = require('express');
var router = express.Router();
var path = require('path');

router.route('/')
  .get( (request, response) => {
    console.log('Hello, there!');
    response.sendFile(path.join(__dirname, '../public', 'hello.html'));
  });

module.exports = router;
