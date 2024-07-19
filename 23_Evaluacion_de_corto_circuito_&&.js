//Evaluacion de corto circuito
//Es cuando una expresion se trata como truthy 
//truthy - es un valor que es considerado true cuando se evalua en un contexto de boolean
const auth = true

if(40){
    console.log('Truthy')
}else{
    console.log('Falsy')
}
/* 
if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)
*/
    //son valores que cuando los pones en un contexto de boolean, como lo va  a evaluar javascript 

const user = {}

user && console.log('Usuario autenticado')//tener cuidado con este tipo de codigo ya que el usuario no esta registado y aun asi lo pasa como true -if({})
//como deberia ser el autenticado con estos mismo ejemplo

auth && console.log('Usuario Autenticado correctamente')//auth es una variable que ya fue asiganada arriba
//Con ternario 
auth ? console.log('Si, si esta autenticado'):console.log('No, no esta autenticado')