var express = require('express');
var router = express.Router();

/* GET my data. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Avery' });
});

module.exports = router;
