let button = document.querySelector('#button');
button.addEventListener('click', () => {

    // Con fetch podemos realizar peticiones HTTP, la respuesta es una promesa.
    // el .then se ejecuta cuando se reciba la respuesta de la petición
    // despues convertimos los datos a JSON con el .json() que a su ves nos retorna
    // una promesa.
    // Posteriormente cuando se resuelve la promesa podemos extraer los datos y trabajar con ellos
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search');
    apiFetch
        .then(resp => resp.json())
        .then(data => {
            let cat = document.querySelector('#cat');
            cat.src = data[0].url;
            console.log(data);


        // el catch lo utilizamos para atrapar los errores en caso de que la petición no se pueda realizar
    }).catch(e => console.log(e))
})



