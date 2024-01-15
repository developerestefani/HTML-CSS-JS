// llamamo por su clase a los sigientes elementos, la seccion izquierda, la derecha y el contenedor general
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// si escuchamos el eventos del maouse posicionandose en la seccion izquierda vamos ha hacer la funcion de flecha y a las lista de elementos del contenedor general y le agregamos la clase hover-left
left.addEventListener('mouseenter', () => {container.classList.add('hover-left')})
// si escuchamos el eventos del maouse posicionandose en la seccion izquierda  vamos ha hacer la funcion de flecha y a las lista de elementos del contenedor general y le quitamos la clase hover-left
left.addEventListener('mouseleave', () => {container.classList.remove('hover-left')})

// si escuchamos el eventos del maouse posicionandose en la seccion derecha vamos ha hacer la funcion de flecha y a las lista de elementos del contenedor general y le agregamos la clase hover-right
right.addEventListener('mouseenter', () =>{container.classList.add('hover-right')} )
// si escuchamos el eventos del maouse posicionandose en la seccion derecha  vamos ha hacer la funcion de flecha y a las lista de elementos del contenedor general y le quitamos la clase hover-right
right.addEventListener('mouseleave', () =>{container.classList.remove('hover-right')} )