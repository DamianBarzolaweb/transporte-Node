var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('nosotros') //vamos a necesitar un nosotros.hbs
})

module.exports = router;
