var express = require('express');
var router = express.Router();

let Lain = require('./../lain.json');

/* GET Home page */

router.get('/', function(req, res, next) {
  res.redirect('/')
});

router.get('/:level', function(req, res, next) {
  let level = req.params.level;
  let LainResponse = Lain[level];
  res.render('level-interface', { LainResponse : LainResponse});
});

router.get('/:level/:id', function(req, res, next) {
    let level = req.params.level;
    let id = req.params.id;
    let LainResponse = Lain[level][id];
    let videoExist = LainResponse["Video"][0];
    if(videoExist){
      res.render('archive-interface-video', { LainResponse : LainResponse});
    }else{
      res.render('archive-interface', { LainResponse : LainResponse});
    }
});
  
  module.exports = router;
  