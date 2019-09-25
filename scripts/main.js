let miImage = document.querySelector('img');

miImage.onclick = function () {
    let  miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox.jpeg') {
      miImage.setAttribute('src','images/firefox.jpeg');
    } else {
      miImage.setAttribute('src', 'images/firefox.jpeg');
    }
}

let  miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}