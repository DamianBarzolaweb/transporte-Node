var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
    res.render('contacto') //vamos a necesitar un contacto.hbs
})

router.post('/', async function (req, res, next) {
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var comentarios = req.body.comentarios;
    // console.log(req.body)

    var obj = {
        to: 'damianbarzolaweb@gmail.com',
        subject: 'Contacto desde la página web',
        html: nombre + " se contacto a traves de la web y quiere saber que le envíen más info a este contacto: " + email + "<br> Su tel es: " + tel + " Su comentario es: " + comentarios

    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
    })

    var info = await transport.sendMail(obj);

    res.render('contacto',{
        message: 'Mensaje enviado correctamente'
    })
})



module.exports = router;

