// Fetch API con Async / Await

//https://jsonplaceholder.typicode.com/
const url = 'https://jsonplaceholder.typicode.com/comments'

//promises .then
// fetch(url) 
//     .then((response)=>{
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error('Hubo un error...')
//     })
//     .then((data)=>console.log(data))
//     .catch(error =>console.log(error.message))

// const consultarAPI =async()=>{
//     const response =await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }


const consultarAPI =async()=>{
    try {
        const response =await fetch(url)
        if(!response.ok){
            throw new Error('Hubo un error...')
        }
        const data = await response.json()
        console.log(data)        
    } catch (error) {
        console.log(error.message)
    }
}


consultarAPI()