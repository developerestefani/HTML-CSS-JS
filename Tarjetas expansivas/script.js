//Creamos el array de elemento con todos los paneles
const paneles = document.querySelectorAll('.paneles')

//Reccorremos el array de paneles con un forEach
paneles.forEach(panel => {

    //cuando un elemneto del array paneles, acciones el evento click se ejecutara la funcion de felcha
    panel.addEventListener('click', () => {

        //llamamos a la funcion que remueve el active del objeto anterior 
        removeActiveClass()

        //Agregamos la clase active al nuevo objeto activo
        panel.classList.add('active')

    })
    
});

//funcion para romover la clase active el elmento anterior
function removeActiveClass(){
    
    //recorre el arrary para buscar el elemnto que se encuentra actualmente activo
    paneles.forEach(panel =>{
        //una vez encontrado removemso la clasea active 
        panel.classList.remove('active')
    })
}