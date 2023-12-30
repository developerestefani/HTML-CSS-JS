// Se carga con la clase los dos contenedores del sitio web
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// Se declara una variable local en 0
let load = 0

// se tiene que utiliar una llamada a una funcion por intervalo de duracion de 30milisegundos
let int = setInterval(blurring, 30)

// Se crea la funcion de dara la animacion al contador
function blurring(){

    // Primero de declara un contador
    load++

    // Luego se declara la desicion siendo que el contador es mayor a 99 entonces la variable int que llama a la funcion blurray se limpia y queda en 0
    if(load > 99){
        clearInterval(int)
    }

    // Optenemos el texto del elemento que cumple la funcion de contado y le agregamos el contador de carga
    loadText.innerHTML= `${load}%`
    
    //llamamos a la funcion scala que definira el porcentaje de opacidad de la imagen
    loadText.style.opacity = scale(load, 0,100,1,0)
    
    // Despues definiremos el blur de la imagen mediante el uso de la funciion scale y filtros
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}


// Definimos la funcion scale como una formula que calcula el porcentaje mediente 5 paremetros, el valor actual del contador, el minimo valor del contador, el maximo valor del contador, el minimo valor de la propiedad y el maximo valor de la propiedad
function scale(num, in_min,in_max,out_min,out_max){

    // Devuelve la siguiente formula que se resta el valor actual con el minimo valor del contador eso se multiplica con el resultado de restar el maximo y minimo valor de la propiedad, esto se divide entre el resultado de multiplicar el maximo valor del contador con el minimo valor del contador y todo sumando a el minimo valor de la propiedad
    return((num-in_min) * (out_max-out_min)) / (in_max-in_min) + out_min

}

