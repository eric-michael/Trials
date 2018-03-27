var express = require('express')
var router = express.Router();

var config = {
  title: "Bye",
  message: "Parting is such sweet sorrow"
}
router.route('/')
  .get( (request, response) => {
    console.log(config.message);
    response.render('bye', config);
  });

module.exports = router;
