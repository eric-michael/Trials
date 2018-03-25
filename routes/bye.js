var express = require('express')
var router = express.Router();

router.route('/')
  .get( (request, response) => {
    console.log('Parting is such sweet sorrow');
    response.send('<h1>Bye!</h1>');
  });

module.exports = router;
