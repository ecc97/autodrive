document.addEventListener('DOMContentLoaded', function(){
    mostrarAutos(autos);
    buscarAutos()
});
let resultado = document.getElementById('resultado'), 
    search = document.getElementById('search');

function mostrarAutos(autos){
    autos.forEach(auto => {
        const elements = document.createElement('li');
        elements.classList.add('listado--card');
        elements.innerHTML = `<img src="${auto.imagen}"/><article>Marca: <strong>${auto.marca}</strong></article><article>Modelo: <strong>${auto.modelo}</strong></article><article>Año: <strong>${auto.year}</strong></article><article>Precio: <strong>${auto.precio}</strong><article>`;
        resultado.appendChild(elements);
    });
}
function buscarAutos(){
    search.addEventListener("input", e => {
        limpiarHTML()
        const inputText = e.target.value.toUpperCase().trim();
        const mostrarFiltrado = autos.filter(auto => auto.marca.toUpperCase().startsWith(inputText) || auto.modelo.toUpperCase().startsWith(inputText) || auto.year.toString().startsWith(inputText) || auto.precio.toString().startsWith(inputText) || auto.color.toUpperCase().startsWith(inputText));

        if(mostrarFiltrado.length){
            mostrarAutos(mostrarFiltrado);
        }else{
            noResultado()
        }
    })
}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}
function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.textContent = 'No hay resultados de búsqueda';
    resultado.appendChild(noResultado)
}