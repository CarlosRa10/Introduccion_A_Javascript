//Unir Dos Objetos

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : 'Carlos',
    premium : true
}

const carrito = {
    cantidad : 1,
    ...producto //Spread operator
}
console.log(carrito)
console.log(carrito.precio)

//Unir dos objetos en un nuevo objeto

const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto)
//Se puede acortar ese codigo con el object literal enhancement

const nuevoObjeto2 = {
    producto,
    cliente
}
console.log(nuevoObjeto2)

//Unir con object.assign pero si hay key repetidos se rescribe por el ultimo que se agrego
// const nuevoObjeto2 = { //Forma con mas codigo
//     ...producto,
//     ...cliente
// }
//Con menos codigo
const nuevoObjeto3 = Object.assign(producto,cliente)
console.log(nuevoObjeto3)