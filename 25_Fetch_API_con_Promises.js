// Fetch API con Promises
//Proporcionar una interfaz para recuperar recursos para poder obtener datos a traves de la red.
//https://jsonplaceholder.typicode.com/
const url = 'https://jsonplaceholder.typicode.com/comments'
//Para utilizar Fetch API tienes dos opciones, 1 es mandarlo a llamar directamente aqui en el codigo, 2 colocarlo dentro de la funcion

// forma numero 1
//Pensemos que el Promise es un objeto que va a estar disponoible a futuro o no?
// ejemplo
//fetch(url)    Quiero obtener los datos de esta url
//   .then()    Entonces que es lo que voy a hacer    

fetch(url) 
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
        throw new Error('Hubo un error...')
    })
    .then((data)=>console.log(data))
    .catch(error =>console.log(error.message))

//Forma numero 2 - dentro de una funcion
const consultarAPI =()=>{
    fetch(url) 
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
            throw new Error('Hubo un error...')
        })
        .then((data)=>console.log(data))
        .catch(error =>console.log(error.message))

}
consultarAPI()