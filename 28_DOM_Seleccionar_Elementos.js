//Selectores
//Todas las interraciones que haces en el DOM o en el codigo HTML por medio de JavaScript requieren o inician con un selector
//Antes usabamos document.getElementById que te permite seleccionar un elemento HTML que tenga un ID unico 
//Lo recomendado hoy en dia es document.querySelector() ... porque tienes acceso a selectores muy similares a los de CSS
const heading = document.querySelector('.heading')
console.log(heading)
console.log(heading.tagName)//Para saber su etiqueta html
console.log(heading.textContent)//Para saber su contenido
console.log(heading.classList)//Para saber las clases aplicadas a ese elementos
console.log(heading.id)//Para saber qie Id tiene

//querySelectorAll - te trae todos los elementos que le correspondan al selector 

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)