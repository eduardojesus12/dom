// Se declaran los arreglos con los datos necesarios
const listAnimals = ['Pez', 'Jaguar', 'Lobo', 'Iguana', 'Pegelagarto', 'Ardilla', 'Canguro', 'Tlacuache', 'Ajolote', 'Gato'];
const listComputers = ['Asus', 'Hp', 'Toshiba', 'Dell', 'Mac', 'Acer', 'Lenovo', 'Huawei', 'Alienware', 'Compaq', '华为技术公司'];
const listPeople = ['Carlos Eduardo', 'Edgar Rodrigo', 'Pedro Angel', 'Cesar Eduardo', 'Luis', 'Clara Itzel',
                    'Tania Belen',  'Felipe de Jesús', 'Sharon', 'Astrik Sem', 'Gustavo Israel', 'Jaquelin', 'Humberto', 'Miguel Alexis'];

// Se realiza el enlace de las constantes con el HTML a traves del id
const btnAnimals = document.querySelector('#animals');
const btnComputers = document.querySelector('#computers');
const btnPeople = document.querySelector('#people');
const list = document.querySelector('#list');

// La función recibe por parametros un arreglo el cual recorre
// por cada vuelta genera un elemento <li></li> con el valor del arreglo dentro
// al final agregamos esos elementos a nuestra lista
function displayList(lists) {
    // el list.textContent limpia nuestra lista
    list.textContent = '';
    // Por medio del foreach recorremos nuestro arreglo
    lists.forEach(l => {
        const item = document.createElement('li');
        item.textContent = l;
        list.appendChild(item);
    });
}

// Agregamos el evento click a nuestro boton y mandamos a llamar a nuestra función para crear nuestras listas
// le pasamos por parametro el arreglo que queremos agregar a la lista
btnAnimals.addEventListener('click', () => {
    displayList(listAnimals);
});

// Agregamos el evento click a nuestro boton y mandamos a llamar a nuestra función para crear nuestras listas
// le pasamos por parametro el arreglo que queremos agregar a la lista
btnComputers.addEventListener('click', () => {
    displayList(listComputers);
})

// Agregamos el evento click a nuestro boton y mandamos a llamar a nuestra función para crear nuestras listas
// le pasamos por parametro el arreglo que queremos agregar a la lista
btnPeople.addEventListener('click', () => {
    displayList(listPeople);
})


/* btnAnimals.addEventListener('click', function() {
    listAnimals.forEach(animal => {
        const li = document.createElement('li');
        // <li></li>
        li.textContent = animal;
        //li.classList.add('mi-clase');
        // <li>Animal</li>
        list.appendChild(li);
    });
}); */




