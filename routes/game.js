var express = require('express');
var router = express.Router();

let Lain = require('./../lain.json');

/* GET Home page */

router.get('/', function(req, res, next) {
  res.redirect('/')
});

router.get('/:site', function(req, res, next) {
  res.redirect('/')
});

router.get('/:site/:level', function(req, res, next) {
  let site = req.params.site;
  let level = req.params.level;
  if (site == "site-a" || site == "site-b"){
    let LainResponse = Lain[site][level];
    site == "site-a" ? numeroDeNiveles=22 : numeroDeNiveles=13
    res.render('level-interface', { LainResponse : LainResponse, level : level, site : site, numeroDeNiveles : numeroDeNiveles})
  }else{
    res.redirect('/')
  }
});

router.get('/:site/:level/:id', function(req, res, next) {
    let site = req.params.site
    let level = req.params.level;
    let id = req.params.id;
    let LainResponse = Lain[site][level][id];
    let videoExist = LainResponse["Video"][0];
    if(videoExist){
      res.render('archive-interface-video', { LainResponse : LainResponse, level : level, site : site});
    }else{
      res.render('archive-interface', { LainResponse : LainResponse, level : level, site : site});
    }
});
  
  module.exports = router;
  