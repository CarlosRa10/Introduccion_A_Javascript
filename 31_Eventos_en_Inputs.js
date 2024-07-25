// Eventos del DOM - Inputs
const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input',(e)=>{//el primer argumnto llamado input es un tipo de evento que queremos aplicar 
    console.log(e.target.value)
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input',functionPassword)

function functionPassword(){
    inputPassword.type = 'text'

    setTimeout(() => {//Es una funcion que va a esperar una cantidad de tiempo y entonces se va a ejecutar 
        inputPassword.type = 'password'
    }, 300);//1000 es 1sg
}