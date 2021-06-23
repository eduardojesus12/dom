let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers');

//En el evento del click del boton se manda a llamar la función asincrona displayData
btnUsers.addEventListener('click', displayData);

btnUsers.addEventListener('click', () => {
    // Con fetch podemos hacer peticiones http
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');

    // Fetch trabaja a traves de promesas para manejar datos asincronos
    // una ves que se resuelve la promesa se ejecuta el .then
    // posteriormente convertimos la respuesta en JSON, esto nos devuelve
    // otra promesa. Despues de que es resuelta podemos recuperar los datos 
    // y utilizaros de acuerdo a nuestras necesidades
    getUsers
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                let parr = document.createElement('p');
                parr.textContent = user.name;
                divUsers.appendChild(parr);
            });
            // el catch lo utilizamos para atrapar los errores en caso de que la petición no se pueda realizar
        }).catch(e => console.log(e));

})

// La función async nos permite el uso del await, lo que hace es esperar hasta que
// que obtenga la respuesta de la peticion fetch.
// Posteriormente convertimos los datos en json, lo que nos retorna una promesa y por la cual
// debemos utilizar nuevamente el await
async function displayData() {
    // con el await esperamos la respuesta de la petición fetch
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    // Con la propiedad ok podemos saber el estatus de la respuesta de nuestra petición fetch
    console.log(getUsers.ok);

    // para convertir la respuesta en JSON utilizamos el .json lo que a su ves nos devuelve una promesa
    let data = await getUsers.json();
    data.forEach(user => {
        let parr = document.createElement('p');
        parr.textContent = `Nombre de usuario: ${user.name}. Email: ${user.email}. Ciudad: ${user.address.city}`;
        divUsers.appendChild(parr);
    });
    console.log(data); 

}

/* async function otraFuncion() {
    console.log(await displayData());
}

otraFuncion(); */

/* displayData(); */