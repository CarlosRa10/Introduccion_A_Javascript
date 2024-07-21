

export function sumar(n1,n2){
    return n1 + n2
}


export function restar(n1,n2){
    return n1 - n2
}

//Tambien puedes exportar de esta manera
/*
export{
sumar, restar
} 
*/


//export default- solo pueden haber uno por archivo y lo puedes nombrar como tu quieras
export default function multiplicar(n1,n2){
    return n1 * n2
}