/** Definimos las constates que nos permitiran acceder a los diferentes elementos accionables de la aplicación
 * @parem barProgress = La primera hace referencia a la linea de progreso por su ID
 * Los dos siguientes hacen referencia a los botones por su ID
 * La ultima hace referencia a los circulos por su clase .position
 */

const barProgress = document.getElementById("progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".position");

//Se hace un contador inicial de elemento activo y se comienza en uno
let elementActive = 1;

//Se le dice que cuando registre un evento de tipo click ejecute una funcion
next.addEventListener('click', () => {
    //Se aumenta los elementos activos en dos
    elementActive++;

    //si los elementos activos son mayores al numero de circulos 
    if(elementActive > circles.length){

        //Le decimos que el numero de elementos activos sea igual que el numero de circulos
        elementActive = circles.length;

    }

    //Se hace llamado a la función para actualizar
    update();
} )

prev.addEventListener('click', () => {
    elementActive--

    if(elementActive < 1) {
        elementActive = 1
    }

    update()
})

//Este funcion quitara o colocara la calse activo en los circulos
function update(){

    circles.forEach((circle, idx) => {
        if(idx < elementActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    barProgress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(elementActive === 1) {
        prev.disabled = true
    } else if(elementActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }


}




