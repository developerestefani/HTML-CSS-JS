const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

var estacion = "juanito"

switch (estacion) {
    case "verano":
        console.log("Es verano")
        break;

    case "invierno":
        console.log("Es invierno")
        break;

    case "otono":
        console.log("Es otono")
        break;

    default:
        console.log("No se tu dime")
        break;
}