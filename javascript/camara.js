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

let divTexto = document.getElementById("subcontenedor");
let newButton = `<a id="grabar">Grabar</a>`;
let buttonToAppend = document.getElementById("controlcamera");
console.log(buttonToAppend);
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
    divTexto.classList.toggle("video");
    activarCamara.classList.toggle("video");
    buttonToAppend.innerHTML = newButton;
    
}
let activarCamara = document.getElementById("comenzar");
activarCamara.addEventListener('click', getStreamAndRecord);
activarCamara.addEventListener('click', mostrarCamara);
activarCamara.addEventListener('click',borrarTexto);

// Grabar
recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
    onGifRecordingStarted: function() {
     console.log('started')
   },
  });
  