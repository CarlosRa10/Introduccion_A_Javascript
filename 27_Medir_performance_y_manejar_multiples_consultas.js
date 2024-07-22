//Performance y Multiple Async Await

//https://jsonplaceholder.typicode.com/
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI =async()=>{
    try {
        const inicio = performance.now()

        const response =await fetch(url3)
        if(!response.ok){
            throw new Error('Hubo un error...')
        }
        const data = await response.json()
        console.log(data)        
        const fin = performance.now()
        console.log(`El resultado es: ${fin-inicio} ms`)
    } catch (error) {
        console.log(error.message)
    }
}


consultarAPI()