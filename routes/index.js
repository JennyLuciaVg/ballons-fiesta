var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ 
  	title: 'Ballons Fiesta' 
  });
});

router.get('/cotizar', function(req, res){
  res.render('cotizar', {
    title: 'Cotización'
  });
});

router.get('/nosotros', function(req, res){
  res.render('nosotros', {
    title: 'Nosotros'
  });
});

module.exports = router;
