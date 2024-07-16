//Function Expression - esta forma va muy relacionado al arrow function
//diferencia entre function expression al function declaration 
//JavaScript guarda esa funcion (expression) como una const y para llamar a esa funcion tienes que llamarla en una linea mas abajo
//en cambio en function declaration puedes crear la llamada de la funcion y luego crear la funcion y si te agarra 

const sumar = function(numero1=0, numero2=0){//parametro (numero)
    console.log(numero1+numero2)
}
sumar(10,20)     