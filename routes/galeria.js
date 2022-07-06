var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('galeria') //vamos a necesitar un galeria.hbs
})

module.exports = router;
