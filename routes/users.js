var express = require('express');
var router = express.Router();
let sum = more = 0

/* GET users listing. */
router.get('/', function(req, res, next) {
  more += 1
  sum += more
  res.send(`Sum = ${sum}`);
});

module.exports = router;
