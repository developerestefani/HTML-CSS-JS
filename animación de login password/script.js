// Se seleciona con su clase al div incluyendo al label
const labels = document.querySelectorAll('.form-control label')

// Se hace una revision del arreglo que tiene los label
labels.forEach(label => {

    // Con dos propiedades de le quita los comentarios a los labels con span
    label.innerHTML = label.innerText

    // Se separa el label en subcadenas
    .split('')

    // se crear un nuevo array con las partes de los label
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)

    // y luego se les junta en un solo elemento
    .join('')
    
});

    

    

    

    