// El evento se dispara cuando el documento esta cargado
window.onload = function () {
    
}

let nameInput = document.querySelector('#nameInput');

// A traves del addListener podemos agregar un evento a nuestro elemento
// en el primer parametro escribimos el tipo de evento
// en el segundo parámetro va una función de callback
nameInput.addEventListener('keydown', function (event) {
    console.log((nameInput.value));
    /* console.log(event.target.value); */
} );

// A traves del addListener podemos agregar un evento a nuestro elemento
// en el primer parametro escribimos el tipo de evento
// en el segundo parámetro va una función de callback
let button = document.querySelector('#button');
button.addEventListener('click', event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
});


/* function cambiarNombre () {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
}
 */
