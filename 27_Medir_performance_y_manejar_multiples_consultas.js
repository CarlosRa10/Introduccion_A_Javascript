//Performance y Multiple Async Await

//https://jsonplaceholder.typicode.com/
const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

// const consultarAPI =async()=>{
//     try {
//         const inicio = performance.now()

//         const response =await fetch(url3)
//         if(!response.ok){
//             throw new Error('Hubo un error...')
//         }
//         const data = await response.json()
//         console.log(data)
//         const fin = performance.now()
//         console.log(`El resultado es: ${fin-inicio} ms`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// consultarAPI()

//Error al poner tres consultas porque se tarda mas en responder
// const consultarAPI = async () => {
//   try {
//     const inicio = performance.now();

//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     const response2 = await fetch(url2);
//     const data2 = await response2.json();
//     console.log(data2);

//     const response3 = await fetch(url3);
//     const data3 = await response3.json();
//     console.log(data3);

//     const fin = performance.now();
//     console.log(`El resultado de la primera funcion es: ${fin - inicio} ms`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// consultarAPI();

//Una consulta mas rapida
const consultarAPI2 = async () => {
  try {
    const inicio = performance.now();

    const [response, response2, response3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);
    //Esta parte es opcional si quieres saber en que link puede haber un error 
    if (!response.ok) {
        throw new Error('Error al obtener datos de la URL: ' + url);
      }
      if (!response2.ok) {
        throw new Error('Error al obtener datos de la URL: ' + url2);
      }
      if (!response3.ok) {
        throw new Error('Error al obtener datos de la URL: ' + url3);
      }
    //Esta parte es opcional si quieres saber en que link puede haber un error 
    const [data, data2, data3] = await Promise.all([
      response.json(),
      response2.json(),
      response3.json(),
    ]);

    console.log(data);
    console.log(data2);
    console.log(data3);

    const fin = performance.now();
    console.log(`El resultado de la segunda funcion es: ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI2()
