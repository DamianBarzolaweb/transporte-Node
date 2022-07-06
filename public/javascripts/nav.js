var toggle = document.getElementById('menuToggle');
var nav = document.getElementsByTagName('nav')[0];
/*los dos primeros renglones como yo llamo a esos elementos por un lado por el id en el otro por la etiqueta,  */


/*event, es un evento que sucede, en este caso estoy llamando al elemento y le digo que se abra*/
document.addEventListener('click', function(e) {
    var navClicked = nav.contains(e.target);
    if (!navClicked) {
        nav.classList.remove('abierto');
    }
});

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle('abierto');
});


/*variales de JS, estudiar*/
/*ver codigos de JS*/