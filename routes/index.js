var express = require('express');
var router = express.Router();

// page details
var config = {
  title: "Home",
  message: "A visitor!"
};

router.route('/')
  .get( (request, response) => {
    console.log(config.message);
    response.render('index', config);
  });

module.exports = router;
