var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('servicios') //vamos a necesitar un servicios.hbs
})

module.exports = router;
