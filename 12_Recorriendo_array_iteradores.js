const tecnologia = ['HTML','JAVA','CSS','JAVASCRIPT','PYTHON']

console.log(tecnologia[0])
console.log(tecnologia[1])
console.log(tecnologia[2])
console.log(tecnologia[3])
console.log(tecnologia[4])

/*Iteradores -iterador for loop'- el for loop consta de tres partes o parametros que le tienes que dar*/
for(let i = 0; i<5; i++){
    console.log(i)
}

for(let i = 0; i<5; i++) {
    console.log(tecnologia[i])
}

for(let i = 0; i<tecnologia.length; i++){
    console.log(tecnologia[i])
}


//Foreach- es un metodo que ejecuta un funcion indicada por cada elemento del arreglo


 const tecnologia2 = ['HTML', 'CCS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

 //forEach- ya sabe cuantas veces tiene que ejecutarse porque ya sabe la extension del arreglo

 tecnologia2.forEach(function(tech){
    console.log(tech)
 })

//map - sirve para iterar- su caracteristica principal es que crea un nuevo arreglo en base a las condiciones de la funcion
//Puedes escribir condiciones y crear nuevos Arrays- Es el mas usado con react

const arrayMap = tecnologia2.map(function(tech){
    return tech // puedes modificar incluso - return 'Hola'
 })

 console.log(arrayMap)


 // for.....of - ejecuta un bloque de codigo por cada elemnto del arreglo-igual que el for pero mas corto
 for(let tech of tecnologia2){
    console.log(tech)
 }



