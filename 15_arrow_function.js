//Funciones Arrow Function
// Al igual que el expression se llama luego de haberlo declarado
const sumar = (numero1=0, numero2=0)=>{//parametro (numero)
    console.log(numero1+numero2)
}

sumar(10,20)

//Cuando son Expresiones puedes convertirlo en arrow function
//Caracteristicas
//Cuando tu funcion tiene una sola linea, puedes eliminar las llaves

const sumar2 = (numero1=0, numero2=0)=> console.log(numero1+numero2)

sumar2(20,20)