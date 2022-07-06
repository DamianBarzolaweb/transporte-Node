var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('novedades') //vamos a necesitar un novedades.hbs
})

module.exports = router;
