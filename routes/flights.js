var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Your Flight Has Been Added');
  });
  
router.get('/index', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);

module.exports = router;
