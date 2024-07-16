//Funciones que retornan valores

//Function Expression - Retornando Valores

const sumar = function(numero1=0, numero2=0){//parametro (numero)
    return numero1+numero2
}
const resultado = sumar(10,20)     
console.log(resultado)

//Function Declaration

function sumar3(numero1=0, numero2=0){
    return numero1+numero2
}
const resultado2 = sumar3(10,50)
console.log(resultado2)

//Arrow function - Retornando Valores
//Cuando es de solo una linea no necesita un return - se hace de manera implicita
const sumar2 = (numero1=0, numero2=0)=> numero1+numero2
const resultado3 = sumar2(20,20)
console.log(resultado3)


const sumar4 = (numero1=0, numero2=0)=>{
    return numero1 + numero2
} 
const resultado4 = sumar4(20,80)
console.log(resultado4)