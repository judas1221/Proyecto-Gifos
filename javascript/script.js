// Cambiar el color al seleccionar ul menu nav
export let cuerpoweb = document.body; 
export let modoOscuro = document.getElementById("modooscuro");
export let favoritos = document.getElementById("favoritos");
export let misGifs = document.getElementById('misgifs');
export let camara = document.getElementById("camara");

export function cambiarModo() { 
    cuerpoweb.classList.toggle("oscuro");
    modoOscuro.innerHTML - cuerpoweb.classList.contains("oscuro") ? "modo Diurno" : "modo nocturno";
}
modoOscuro.addEventListener('click', cambiarModo);

export function modificarColor(){
    modoOscuro.classList.toggle("seleccion-menu");
}
modoOscuro.addEventListener('click', modificarColor);



