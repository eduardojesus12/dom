// Se hace referencia al elemento dentro del HTML
// para seleccionar una clase se usa .
// Para seleccionar un id usamos #
let subtitle = document.querySelector('#subtitle'); 
let parrafo = document.querySelector('#parrafo');

console.log(subtitle);

// Con textContent podemos acceder al valor del elemento HTML
// Tambien podemos cambiar el valor asignando un nuevo valor
console.log(subtitle.textContent);
subtitle.textContent = 'Nuevo valor';

// classList.add('mi-clase') lo utilizamos para agregar clases al elemento
subtitle.classList.add('red');

// classList.remove('mi-clase') lo utilizamos para remover clases del elemento
subtitle.classList.remove('red');

/* subtitle.textContent = 'Subtítulo'; */

// Se crea un arreglo con animales
const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Zorro'];
const list = document.querySelector('#list');

// push(elemento) sirve para agregar un elemento al final de un arreglo 
animales.push('Elefante');


// foreach es un ciclo para recorrer todos los 
// elemento de un arreglo u objeto, tiene una funcion anonima de callback
animales.forEach(function(animal, index) {
    let item = document.createElement('li');
    item.textContent = `${index + 1} ${animal}`;
    //<li>Perro</li>
    list.appendChild(item);
} );

// foreach es un ciclo para recorrer todos los 
// elemento de un arreglo u objeto, tiene una funcion anonima de callback
// usamos una función de flecha en este caso
animales.forEach((animal, index) => {
    let item = document.createElement('li');
    item.textContent = `${index + 1} ${animal}`;
    //<li>Perro</li>
    list.appendChild(item);
} );


