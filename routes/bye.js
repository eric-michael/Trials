var express = require('express')
var router = express.Router();
var path = require('path');

router.route('/')
  .get( (request, response) => {
    console.log('Parting is such sweet sorrow');
    response.sendFile(path.join(__dirname, '../public', 'bye.html'));
  });

module.exports = router;
