// Cambiar el color al seleccionar ul menu nav
let cuerpoweb = document.body; 
let modoOscuro = document.getElementById("modooscuro");
let favoritos = document.getElementById("favoritos");
let misGifs = document.getElementById('misgifs');
let camara = document.getElementById("camara");

function cambiarModo() { 
    cuerpoweb.classList.toggle("oscuro");
    modoOscuro.innerHTML - cuerpoweb.classList.contains("oscuro") ? "modo Diurno" : "modo nocturno";
}
modoOscuro.addEventListener('click', cambiarModo);

function modificarColor(){
    modoOscuro.classList.toggle("seleccion-menu")[0];
}
modoOscuro.addEventListener('click', modificarColor);



// Cambiar el color a modo oscuro



