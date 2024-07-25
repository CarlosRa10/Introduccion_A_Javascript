// Manipular elementos HTML con JS
const heading = document.querySelector('.heading')//Seleccionas un elemento
const enlaces = document.querySelectorAll('.navegacion a')
//Accedes a sus atributos --- Y luego puedes asignarlo
heading.textContent = 'Un nuevo heading...'//asignar directamente


heading.id = 'Un nuevo ID'

// El delete no funciona contra los querySelector

heading.removeAttribute('id')//Puedes eliminar id y las clases tambien

const inputNombre = document.querySelector('#nombre')

inputNombre.value = 'Un nuevo valor...'  
inputNombre.dataset.nombre = "input"

console.log(enlaces)

enlaces[0].textContent = 'Un nuevo enlace'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')