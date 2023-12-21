// Se busca el contemnido de los elemento de las buquedas mendiante su clase
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const search =  document.querySelector('.search')

// Primero se indetifica que se quiere tomar una accion la cual sera el evento click
btn.addEventListener('click', () => {

    //se revisa la lista de clases, si la clase no exite se agrega y se devuelve 1 si existe se limina devuelve 0
    search.classList.toggle('active')

    // Se le agrega el foco a el input
    input.focus()

})