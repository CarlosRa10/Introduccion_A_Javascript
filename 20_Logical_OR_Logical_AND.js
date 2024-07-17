const saldo = 1000
const pagar = 500
const tarjeta =true


/*
Logical OR y Logical AND
|| OR - Al menos una se cumple
&& AND - Revisa que todas se cumplan
*/
if(saldo>pagar || tarjeta){
    console.log('Puedes pagar')
}else{
    console.log('No puedes pagar')
}