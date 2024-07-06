//Manipulacion de objetos 
//Es cambiar sus valores

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false
}
//Como hacer para que "NOOOO" se modifiquen, agreguen o eliminen las propiedades
//Object.freeze(producto)

//Como hacer paraque solo se modifiquen pero no se añadan o eliminen propiedades
Object.seal(producto)


//Rescribir un valor
//cuando entras a las propiedades no es tan estricto el const
producto.disponible = true
console.log(producto.disponible)


//Añadir un valor
//algo que no existe y le asigno un valor
//Lo que hace es que se llena ese objeto de informacion 
//Si no existe lo agrega
producto.imagen = 'imagen.jpg'
console.log(producto)


//Para eliminar una propiedad o valor
delete producto.precio

console.log(producto)