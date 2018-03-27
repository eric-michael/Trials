var express = require('express');
var router = express.Router();

// page details
var config = {
  title: "Hello",
  message: "Hello, there!"
};

router.route('/')
  .get( (request, response) => {
    console.log(config.message);
    response.render('hello', config);
  });

module.exports = router;
