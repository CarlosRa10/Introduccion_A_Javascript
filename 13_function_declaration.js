//nos permite hacer codigo reutilizable, separar en pequeñas funciones
// Function Declaration

function sumar(){
    console.log(1+1)
}

sumar()

 //Tomar parametro- Un parametro es una variable especial que se utiliza en un funcion y cuyo valor se refiere a valores que obtiene del exterior

 function sumar2(numero1, numero2){//parametro (numero)
    console.log(numero1+numero2)
}

sumar2(10,20)//Lo que le pasamos es un argumento (10,20)
sumar2(100,200)


//Parametros por Default - para que no haya error de NaN al ver que no le pasamos valores a algunos parametros
function sumar3(numero1=0, numero2=0){//parametro (numero)
    console.log(numero1+numero2)
}
sumar3(10)