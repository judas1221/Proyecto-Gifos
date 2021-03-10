
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