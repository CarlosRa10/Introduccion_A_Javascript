//Ternarios -Se usa mucho en react-
const auth = true
const saldo = 200
const pagar = 500
const tarjeta =true

if(auth){
    console.log('Usuario Autenticado')
}else{
    console.log('Usuario Autenticado')
}
//sintaxis de operador ternario
//lo que deseas comprobar(auth)-condicion de si o no (?)-lo que va antes de los : es el codigo si se cumple la condicion y lo que va despues de los : es el codigo si no se cumple la condicion
//auth ? :
//Ejemplo
auth ? console.log('Usuario Autenticado'):console.log('Usuario no Autenticado')

/*
auth ? 
console.log('Usuario Autenticado'):
console.log('Usuario no Autenticado')
 */
//Esto es un ternario, pero con una linea de espacio
saldo > pagar ?
    console.log('Puedes pagar'):
    console.log('No puedes pagar')

//Ternario anidado
saldo > pagar ?
    console.log('Puedes pagar'):
    tarjeta ?
        console.log('Puedes pagar con tarjeta'):
        console.log('No puedes pagar')


saldo > pagar || tarjeta?
    console.log('Puedes pagar'):
    console.log('No puedes pagar')