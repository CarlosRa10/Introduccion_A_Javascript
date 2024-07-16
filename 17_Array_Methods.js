//Metodos de Arrays

const tecnologias = ['HTML', 'CCS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [1,2,3]

//Filter -Nos sirve para sacar un elemento del arreglo o tambien mantener ese elemento en el arreglo y sacar todos los demas-

const nuevoArray = tecnologias.filter(function(tech){
    console.log(tech)
})

//otros ejemplos 

const nuevoArray2 = tecnologias.filter(ejemploFilter)

function ejemploFilter(tech){
    console.log(tech)
}
//Ejenplo 2
const ejemploFilter2 = (tech) =>{
    console.log(tech)
}
const nuevoArray3 = tecnologias.filter(ejemploFilter2)//Aqui esto mandando a llamar una function y tengo que asegurarme que la funcion creada este arriba de este codigo 