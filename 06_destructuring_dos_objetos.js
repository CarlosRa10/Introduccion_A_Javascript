//Destructuring de dos o mas objetos

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : 'Carlos',
    premium : true,
    direccion : {
        calle : 'Calle La Paz'
    }
}

const {nombre} = producto
const {nombre : nombreCliente} = cliente //Esto evita colision de nombres
const {direccion : calle} = cliente // como direccion no es un valor si no objeto, se trae la propiedad completa
const {direccion : {calle : calleDeLaZona}} = cliente//aqui se llama el objeto y el valor exacto que desea modificar el nombre
console.log(nombre)
console.log(nombreCliente)
console.log(calleDeLaZona)