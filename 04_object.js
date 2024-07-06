//Objetos
//Es una coleccion de propiedades 
//Puede tener multiples valores en una variable
//Propiedad es una asociacion de clave y valor

const producto = {
    //Propieda es la clave y valor juntas
    //Clave----Valor
    nombre : 'Tablet',
    precio : 300,
    disponible : false
}


console.log(producto)
console.log(typeof producto)
console.table(producto)

console.log(producto.nombre)//Acceder con sintaxis de punto(.)



//Antes para extraer un valor de una propiedad

const nombre = producto.nombre
console.log(nombre)


//Destructuring  - nos permite extraer una variable y generarla en una sola linea de codigo 
//puedo extraer multiples valores

const {precio,disponible} = producto
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
//sirve para colocar dentro de un objeto
const autenticado = true
const usuario = 'Carlos'
//tienen el mismo nombre, solo aplicando cuando key y value son iguales 
const nuevoObjeto = { 
    autenticado,
    usuario
}

console.log(nuevoObjeto)
