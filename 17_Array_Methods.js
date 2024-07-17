//Metodos de Arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [1,2,3,10,20,30]

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
//Un higher order function es una funcion que toma otra funcion - funcion de orden superior
const nuevoArray5 = tecnologias.filter((tech)=>tech !== 'HTML')//Tambien se le llaman Callback- Es una funcion de orden superior- (tech)=>tech !== 'HTML'
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
const resultado = numeros.filter(numero=>numero >15)
console.log(resultado)
if (resultado.length>0){
    console.log('Si hay elementos')
}else{
    console.log('No hay elementos')
}

//Metodo - Includes
//Revisa si hay un elemento en un arreglo
const resultado1 = tecnologias.includes('CSS')
console.log(resultado1)


//Some - Devuelve si al menos uno cumple la condicion 
//El some a diferencia del filter no te trae los valores, solo te dicen si cumple la condicion o no 
const resultado3 = numeros.some(numero=>numero>15)
console.log(resultado3)
if (resultado3){
    console.log('Si hay elementos')
}else{
    console.log('No hay elementos')
}


//Find - Devuelve el primer elemento que cumpla una condicion 
const resultado4 = numeros.find(numero=>numero>15)
console.log(resultado4)


//Every - Lo que hace es retornar true o false si todos cumplen la condicion 
const resultado5 = numeros.every(numero=>numero>15)
console.log(resultado5)


//Reduce - Retorna un acumulado del total - toman dos parametros... el parentesis se omite solo cuando es un solo parametro
//El total sirve como un acumulador
const resultado6 = numeros.reduce((total,numero)=>{
    console.log(total)
    console.log(numero)
    return total+numero
},0)
console.log(resultado6)
//ejemplo reduce con arrow function

const resultado7 = numeros.reduce((total,numero)=>total+numero,0)
console.log(resultado7)