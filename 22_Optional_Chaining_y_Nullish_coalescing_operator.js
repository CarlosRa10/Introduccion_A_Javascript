// Optional chaining ' ? '
const alumno = {
    nombre: 'Carlos',
    clase: 'Programación 1',
    aprobado: true,
    examenes:{
        examen1:20
    }
}
//se utiliza en respuesta a una api
console.log(alumno.examenes?.examen1)//En alumno, existe examenes? si existe imprime examen1
console.log('Despues de ALUMNO')






// Nullish coalescing operator  ( ?? )
//Es un operador logico que retorna el valor que esta del lado derecho, cuando el valor del lado izquierdo es nulo(undefined), en caso contrario, retorna el valor de la izquierda
//Se utiliza bastante cuando trabajas con un paginador
const pagina = null ?? 1
console.log(pagina)