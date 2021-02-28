// Cambiar el color al seleccionar ul menu nav
let modoOscuro = document.getElementById("modooscuro");
modoOscuro.addEventListener('click',() => {
    modoOscuro.style.color ="#9dafc4";
});
let favoritos = document.getElementById("favoritos");
favoritos.addEventListener('click',() => {
    favoritos.style.color ="#9dafc4";
});
let misGifs = document.getElementById('misgifs');
misGifs.addEventListener('click',() => {
    misGifs.style.color ="#9dafc4";
});
let camara = document.getElementById("camara");
camara.addEventListener('click',() => {
    camara.style.backgroundColor="#9dafc4";
});

// Cambiar el color a modo oscuro
modoOscuro.addEventListener('click', cambiarModo);

function cambiarModo() { 
    let cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}

//Acceder a la camara
function getStreamAndRecord () { 
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
       height: { max: 480 }
    }
 })
 .then(function(stream) {
    video.srcObject = stream;
    video.play()
})};

let activarCamara = document.getElementById("comenzar");
activarCamara.addEventListener('click', getStreamAndRecord);