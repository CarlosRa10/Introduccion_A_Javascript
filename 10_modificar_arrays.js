const tecnologia = ['HTML','JAVA','CSS','JAVASCRIPT','PYTHON']
console.log(tecnologia)
tecnologia[3]='RUST'
tecnologia[5]='JAVASCRIPT'



//Metodos para array- Recuerda que un metodo son funciones ya existente implementados por creadores
//Mutar es modificar-no se recomienda usar  mutar o modificarse en react como por ejemplo (push)

//Metodo push
tecnologia.push('NEST.JS')
console.table(tecnologia)

//Mutar es modificar-no se recomienda usar  mutar o modificarse en react como por ejemplo (push)
//Una opcion es 
const nuevoArreglo = [...tecnologia,'NODE.JS']//los tres puntos(...) copian los elementos y puedes antes o despues un valor nuevo
console.table(nuevoArreglo)

//Metodo Shift-Elimina el primer elemento de un arreglo - no recomendado para react ya que muta tu arreglo
tecnologia.shift()
console.table(tecnologia)
//Alternativa
//Filter - permite sacar o mantener elementos en baso a cierta condicion-tambien asigna a un arreglo nuevo en vez de modificar eloriginal
const tecnologia2 = tecnologia.filter(function(tech){//El fuction usado en esta linea accede a cada elemento del arreglo
    //console.log(tech)
    if(tech !== 'JAVA') {//Si es diferente a java retorna el valor y se va agregando en cada iteracion (for)
        return tech
    }
})

console.log(tecnologia2)

//Map -usaremos para crear un nuevo arreglo copiando el original y modificarlo
//Accede a un elemento-map itera y puedes modificar pero no mantiene elementos asi que hay que indicarle que luego que busque el elemento encontrado no borre a los demas
const tecnologia3 = tecnologia.map(function(tech){
    //console.log(tech)
    if (tech === 'RUST'){
        return 'C++'
    }else{//Asi mantiene el resto de los elementos
        return tech
    }
})
console.log(tecnologia3)