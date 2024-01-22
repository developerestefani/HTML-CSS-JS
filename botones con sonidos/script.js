// Vamos a crear un array con los nombre de todos los botones con sonido
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// Vamos a recorrer ese array para ejecutar las funciones 
sounds.forEach(sound => {

    // Primero creamos una constante que sera nuestro elemento boton
    const btn = document.createElement('button')

    // Segundo a ese elemento en esa constante le creamos una clase llamada .btn
    btn.classList.add('btn')

    // Tercero creamos al elemento boton le agregamos el id de el array que estamos recorriendo
    btn.innerText = sound

    // Cuarto con ese elemento boton, vamos a accionar la propiedad de evento, con el evento click
    btn.addEventListener('click', ()=>{

        // Primero definimos la funcion para detener el sonido
        stopSongs()

        // Despues la propiedad para reproducir el sonido al obtener el id del boton
        document.getElementById(sound).play()

    })

 

    // despues llamamos a los reproductores de sonido con su id para crearles un hijo con la propiedades definidas
    document.getElementById('buttons').appendChild(btn)
    
});



// Creamos la funcion para detener el sonido
function stopSongs(){

    // Primero recorremos el array con los id
    sounds.forEach(sound=>{

        // Seguidamente llamamos a los elementos mediante su id
        const song = document.getElementById(sound)

        // Le aplicamos la propiedas que detiene el sonido
        song.pause()

        // Regrasmoa el sonido al inicio por si se vuelve a activar
        song.currentTime = 0

    })


}

