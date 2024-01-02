// llamar el selector de las cajas
const boxes = document.querySelectorAll('.box')

// Se registra un evento especifico de ventana, el evento a registrar es de tipo scroll, llamara a la funcion checkboxes
window.addEventListener('scroll', checkBoxes)

// se llama a la funcion de cajas
checkBoxes()

// Se crea la funcion que creara la animacion de las cajas
function checkBoxes(){

    // se calcula el tamano del elemento de la ventana completa y dividirlo entre 5 y multiplicarlo * 4
    const triggerBottom = window.innerHeight / 5 * 4

    // Se revisa el array de los elemento
    boxes.forEach(box => {
        // Se declara una varibale que me diga la distancia del elemento con la parte superior de la ventana
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            // si el tamano de la ventana es menos que el tamano completo de la ventana entonces se muestra la ventana
            box.classList.add('show')
        } else {
            // de lo contrario se quita la propiedad para mostrar
            box.classList.remove('show')
        }
    })

}        