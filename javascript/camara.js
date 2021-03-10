import {modoOscuro} from '/javascript/script.js';
console.log(modoOscuro);
function cambiarImagenes(){
    let camaraDia= document.getElementById("camara_dia");
    camaraDia.classList.toggle("nocturna");
    let peliculaDia = document.getElementById("pelicula_dia");
    peliculaDia.classList.toggle("nocturna");
}
modoOscuro.addEventListener('click',cambiarImagenes);

//modoOscuro.removeEventListener('click', cambiarImagenes);

function crearImagen(){
   let  camaraNoche = document.getElementById("camara_noche");
   camaraNoche.classList.toggle("nocturna");
   let peliculaNoche = document.getElementById('pelicula_noche');
   peliculaNoche.classList.toggle("nocturna");       
}
modoOscuro.addEventListener('click', crearImagen);

let video = document.getElementsByTagName("video")[0];

function getStreamAndRecord () { 
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        width:{ max: 580},
       height: { max: 500 }
    }
 })
 .then(function(stream) {
    video.srcObject = stream;
    video.load();
    video.play();
})};

function mostrarCamara(){
    video.classList.toggle("video");
}
function borrarTexto(){
    let divTexto = document.getElementById("contenedor");
    divTexto.removeChild(divTexto.childNodes[3]);
    divTexto.removeChild(divTexto.childNodes[4]);
    divTexto.removeChild(divTexto.childNodes[5]);
}
let activarCamara = document.getElementById("comenzar");
activarCamara.addEventListener('click', getStreamAndRecord);
activarCamara.addEventListener('click', mostrarCamara);
activarCamara.addEventListener('click',borrarTexto);