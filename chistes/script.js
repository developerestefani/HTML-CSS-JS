// Se tiene  selecionar los elementos con su clase, tanto la del texto como la del boton
const Eljoke = document.getElementById('joke')
const BtnJoke = document.getElementById('jokeBtn')

// El boton vamos a buscar la funcion de evento, con el evento click y llamamos a la funcion que ejecuta los chistes
BtnJoke.addEventListener('click', functionjoks)

// llamamos a la funcion que genera los chistes
functionjoks()

// Creamos un funcion asincrona 
async function functionjoks(){

    // Creamos una constante para definir el encabezado de la solicitud en la base de datos
    const config = {
         // definimos el header con el tipo de llamado como aplication/json
         headers:{
            Accept: 'application/json',
        },
    }
    
    // Hacemos una llamada al enlace de la base de datos, y le mandamos el encabesado realizado anteriormente
    const res = await fetch('https://icanhazdadjoke.com', config)

    // Creamos una constante para recibir la data en formato de json
    const data = await res.json()

    // Y agregamos al elemnto que contiene el texto, la seccion del json que tiene el chiste
    Eljoke.innerHTML = data.joke

}

