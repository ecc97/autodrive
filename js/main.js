//Definicón de imágenes
const imagenes = [
    'img/background_01.jpg',
    'img/background_02.jpg',
    'img/background_03.jpg',
]
//Estado App
let index = 0;
const max = imagenes.length;
//Obtener el DOM de los elementos
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');
//escuchar eventos de clic de flecha
prevSlideButton.addEventListener('click', function(){
    index--;
    setImageIndex();
    changeBackgroundImage(imagenes[index], containerElement);
});
nextSlideButton.addEventListener('click', function(){
    index++;
    setImageIndex();
    changeBackgroundImage(imagenes[index], containerElement);
});
//utilizando funciones
function setImageIndex(){
    if(index < 0) {
        index = max - 1;
    }
    if(index === max){ 
        index = 0;
    }
}
function changeBackgroundImage(backgroundImage, element){
    element.style.backgroundImage = 'url(' + backgroundImage + ')';
}
// Cambiar imagen automáticamente cada 5 segundos (5000 ms)
setInterval(function() {
    index++;
    setImageIndex();
    changeBackgroundImage(imagenes[index], containerElement);
}, 5000);
//Cambio de contenido de las secciones
var divs = document.getElementsByClassName("contenido");
var enlaces = document.getElementsByTagName("a");
var home = document.getElementById("e-home");
var feature = document.getElementById("e-feature");
var contact = document.getElementById("e-contact");
var reserv = document.getElementById("e-reserv");

function mostrarDiv(id, enlace) {
    // Ocultar todos los divs y remover la clase "activo" de los enlaces
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove("activo");
        enlaces[i].classList.remove("activo");
        divs[i].style.display = "none";
    }

    // Mostrar el div seleccionado y agregar la clase "activo" al enlace
    var div = document.getElementById(id);
    div.classList.add("activo");
    enlace.classList.add("activo");
    div.style.display = "flex";
}
home.onclick = function() {
    mostrarDiv("home", this);
};
feature.onclick = function() {
    mostrarDiv("feature", this);
};
contact.onclick = function() {
    mostrarDiv("contact", this);
};
reserv.onclick = function() {
    mostrarDiv("contact", this);
};