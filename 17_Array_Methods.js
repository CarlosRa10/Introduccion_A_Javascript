//Metodos de Arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [1,2,3,10]

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
//- lo mismo de arriba pero en un solo codigo
//const ejemploFilter2 = (tech) =>console.log(tech)

const nuevoArray3 = tecnologias.filter(ejemploFilter2)//Aqui esto mandando a llamar una function y tengo que asegurarme que la funcion creada este arriba de este codigo 
//Ejemplo 3
const nuevoArray4 = tecnologias.filter((tech)=>console.log(tech))
//Ejemplo con condiciones
const nuevoArray5 = tecnologias.filter((tech)=>tech !== 'HTML')
//Si es un solo parametro, puedes cortarlo
const nuevoArray6 = tecnologias.filter(tech=>tech !== 'HTML')
console.log(nuevoArray5)

const tecnologia2 = tecnologias.filter(function(tech){//El fuction usado en esta linea accede a cada elemento del arreglo
    //console.log(tech)
    if(tech !== 'HTML') {//Si es diferente a java retorna el valor y se va agregando en cada iteracion (for)
        return tech
    }
})

console.log(tecnologia2)


//Ejemplo para lista con numeros 
const resultado = numeros.filter(numero=>numero !==10)
console.log(resultado)

//Metodo - Includes
//Revisa si hay un elemento en un arreglo
const resultado1 = tecnologias.includes('CSS')
console.log(resultado1)
