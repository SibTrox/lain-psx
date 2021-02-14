var express = require('express');
var router = express.Router();

/* GET Home page */
router.get('/', (req, res ,next) => res.render('index'));

router.get('/:zone', function(req, res, next) {
    req.params.zone == "routes" ? res.render('routes') :
    req.params.zone == "about" ? res.render('about') :
    req.params.zone == "credits" ? res.render('credits') :
    res.redirect('/')
  });

module.exports = router;
