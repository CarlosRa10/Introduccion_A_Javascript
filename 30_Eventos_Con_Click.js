// Eventos del DOM - Clicks
const heading = document.querySelector('.heading')
// Una vez que tú seleccionas un elemento, tienes accesos a registrarle un evento
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('click', () =>{
//     heading.textContent = 'Nuevo heading al dar click...'
// })

// heading.addEventListener('mouseenter', () =>{
//     heading.textContent = 'Entrando'
// })

// heading.addEventListener('mouseleave', () =>{
//     heading.textContent = 'Saliendo'
// })

enlaces.forEach(enlace =>{
    enlace.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log('Diste click en un enlace...')
        console.log(e.target)
        //enlace.textContent = 'ok'
        e.target.textContent = 'Diste click'
    })
})