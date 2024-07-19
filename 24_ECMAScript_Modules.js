import { sumar as FuncionSumar, restar } from "./Funciones.js"
//otra maneraa de importar - colocas alia- extrar la funcion y se lo asignas a otro valor (Recuerda cambiar en tu codigo sumar por FuncionSumar)
//import { sumar as FuncionSumar, restar } from "./Funciones.js"




/* 
function sumar(n1,n2){
    return n1 + n2
}
*/
const resultado_suma = FuncionSumar(10,10)// se cambio sumar por FuncionSumar
console.log(resultado_suma)

//////////////////////
/* 
function restar(n1,n2){
    return n1 - n2
}
*/
const resultado_resta = restar(10,5)
console.log(resultado_resta)
