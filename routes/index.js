var express = require('express');
var router = express.Router();
var path = require('path');

router.route('/')
  .get( (request, response) => {
    console.log('A visitor!');
    response.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

module.exports = router;
