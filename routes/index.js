var express = require('express');
var router = express.Router();

/* GET Home page */
router.get('/', (req, res ,next) => res.render('index'));

router.get('/routes', (req, res ,next) => res.render('routes'));

router.get('/about', (req, res ,next) => res.render('about'));

router.get('/credits', (req, res ,next) => res.render('credits'));

module.exports = router;
