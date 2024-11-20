//variables
const palabras = document.querySelectorAll('.palabra');
const categorias = document.querySelectorAll('.categoria');
const botonValidar = document.getElementById('boton-validar');

//Hacemos que fucnione el drag and drop
categorias.forEach(categoria => {
    categoria.addEventListener('dragover', (e) => {
        e.preventDefault();
        categoria.classList.add('sobre');
    });

    categoria.addEventListener('dragleave', () => {
        categoria.classList.remove('sobre');
    });

    categoria.addEventListener('drop', () => {
        const palabraArrastrada = document.querySelector('.palabra.arrastrando');
        categoria.appendChild(palabraArrastrada);
        categoria.classList.remove('sobre');
    });
});

palabras.forEach(palabra => {
    palabra.addEventListener('dragstart', () => {
        palabra.classList.add('arrastrando');
    });

    palabra.addEventListener('dragend', () => {
        palabra.classList.remove('arrastrando');
    });
});



botonValidar.addEventListener('click', () => {

    categorias.forEach(categoria => {
        const categoriaCorrecta = categoria.getAttribute('data-category');
        const palabrasCategoria = categoria.querySelectorAll('.palabra');

        palabrasCategoria.forEach(palabra => {
            const categoriaPalabra = palabra.getAttribute('data-category');
            if (categoriaPalabra === categoriaCorrecta) {
                palabra.style.backgroundColor = '#28a745';
            } else {
                palabra.style.backgroundColor = '#dc3545';
            }
        });
    });
});
