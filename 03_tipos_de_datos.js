//Tipos de datos 
/*
Comentarios
Comentar: Ctrl + K seguido de Ctrl + C
Descomentar: Ctrl + K seguido de Ctrl + U

*/

//Undefined 

let cliente
console.log(cliente)
console.log(typeof(cliente))
console.log(typeof cliente)

//String o cadena de texto
const alumno = 'Carlos'
console.log(alumno)
console.log(typeof alumno)

const producto = 'Monitor 40 pulgadas'
console.log(producto)
console.log(typeof producto)


//Numbers- no hay flotamtes, todos son numeros

const numero = 20.20
const numero_2 = 40
const numero_3 = -100
const numero_4 = '20'

console.log(numero,numero_2,numero_3)
console.log(typeof (numero,numero_2,numero_3))
console.log(typeof(numero_2 + numero_4))

//BigInt 

const NumeroGrande = BigInt(314544543543543546354654156545168)
console.log(typeof NumeroGrande)


//Boolean

const descuento = false
console.log(typeof descuento)


//Null
const descuento_2 = null //Null requiere que se asigne
console.log(descuento_2)
console.log(typeof descuento_2)


//Symbol - cada symbol es unico aunque lo compares

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)