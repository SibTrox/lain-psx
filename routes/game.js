var express = require("express");
var router = express.Router();

let Lain = require("./../public/content/lain.json");
let alphabeticalOrder = require("./../public/content/order.json").alphabeticalOrder;
let chronologicalOrder = require("./../public/content/order.json").chronologicalOrder;
let naturalOrder = require("./../public/content/order.json").naturalOrder;

/* GET Home page */

router.get("/", function(req, res, next) {
  res.redirect("/")
});

router.get("/:site", function(req, res, next) {
  res.redirect("/")
});

router.get("/:site/:level", function(req, res, next) {
  let site = req.params.site;
  let level = req.params.level;
  if (site == "site-a" || site == "site-b"){
    let LainResponse = Lain[site][level];
    site == "site-a" ? numeroDeNiveles=22 : numeroDeNiveles=13
    res.render("level-interface", { LainResponse : LainResponse, level : level, site : site, numeroDeNiveles : numeroDeNiveles})
  }else{
    res.redirect("/")
  }
});

router.get("/:site/:level/:id", function(req, res, next) {
    let site = req.params.site
    let level = req.params.level;
    let id = req.params.id;
    let LainResponse = Lain[site][level][id];
    let videoExist = LainResponse["Video"][0];

    for(let x = 0 ; x < alphabeticalOrder.length ; x++){
      if(alphabeticalOrder[x] == "/"+site+"/"+level+"/"+id){
        nivelPosteriorAlfabetico = alphabeticalOrder[x+1];
        nivelAnteriorAlfabetico = alphabeticalOrder[x-1]
        break;
      }
    }

    for(let j = 0; j < chronologicalOrder.length ; j++){
      if(chronologicalOrder[j] == "/"+site+"/"+level+"/"+id){
        nivelPosteriorCronologico = chronologicalOrder[j+1];
        nivelAnteriorCronologico = chronologicalOrder[j-1];
        break;
      }
    }

    for(let i = 0; i < naturalOrder.length ; i++){
      if(naturalOrder[i] == "/"+site+"/"+level+"/"+id){
        nivelPosteriorNatural = naturalOrder[i+1];
        nivelAnteriorNatural = naturalOrder[i-1];
        break;
      }
    }

    if(videoExist){
      res.render("archive-interface-video", { 
                                              LainResponse : LainResponse, 
                                              level : level, 
                                              site : site, 
                                              nivelPosteriorAlfabetico : nivelPosteriorAlfabetico, 
                                              nivelAnteriorAlfabetico : nivelAnteriorAlfabetico,
                                              nivelPosteriorCronologico : nivelPosteriorCronologico,
                                              nivelAnteriorCronologico : nivelAnteriorCronologico,
                                              nivelPosteriorNatural : nivelPosteriorNatural,
                                              nivelAnteriorNatural : nivelAnteriorNatural
                                            });
    }else{
      res.render("archive-interface", { 
                                        LainResponse : LainResponse, 
                                        level : level, 
                                        site : site, 
                                        nivelPosteriorAlfabetico : nivelPosteriorAlfabetico, 
                                        nivelAnteriorAlfabetico : nivelAnteriorAlfabetico,
                                        nivelPosteriorCronologico : nivelPosteriorCronologico,
                                        nivelAnteriorCronologico : nivelAnteriorCronologico,
                                        nivelPosteriorNatural : nivelPosteriorNatural,
                                        nivelAnteriorNatural : nivelAnteriorNatural
                                      });
    }    

});

module.exports = router;
  