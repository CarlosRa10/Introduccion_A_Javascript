//Condicionales

const disponible = 4000
const retirar = 200

const auth = true

if(auth){
    //Se cumple la condicion
    console.log('Acceso al sistema')
}else{
    //No se cumple la condicion
    console.log('No tienes permiso, inicia sesión')
}
/*
signos de comparacion
==  - igual que
> -mayor que
< -Menor que
<= - Menor o igual
>=  -Mayor o igual
=== -igual estrcito
!== -diferente a 
*/ 

if(disponible >= retirar){
    //Se cumple la condicion
    console.log('Si puedes retirar')
}else{
    //No se cumple la condicion
    console.log('Saldo insuficiente')
}