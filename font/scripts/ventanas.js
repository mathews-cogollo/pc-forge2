// Definir las variables en JavaScript
var compensasionX = 335;
var compensasionY = 50;

// Asignar el valor de las variables al CSS
document.documentElement.style.setProperty("--compensasion-x", compensasionX + "px");
document.documentElement.style.setProperty("--compensasion-y", compensasionY + "px");


const ventanas = document.querySelectorAll('.ventana');
const anclajes = document.querySelectorAll('.anclaje');
const offsetsVentanas = {};
const distanciaAnclaje = 50;

function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function estaCercaDelAnclaje(ventana, anclaje) {
    const rectVentana = ventana.getBoundingClientRect();
    const rectAnclaje = anclaje.getBoundingClientRect();
    const centroVentanaX = rectVentana.left + rectVentana.width / 2;
    const centroVentanaY = rectVentana.top + rectVentana.height / 2;
    const centroAnclajeX = rectAnclaje.left + rectAnclaje.width / 2;
    const centroAnclajeY = rectAnclaje.top + rectAnclaje.height / 2;
    const distancia = calcularDistancia(centroVentanaX, centroVentanaY, centroAnclajeX, centroAnclajeY);
    return distancia <= distanciaAnclaje;
}

function actualizarPosicionVentana(ventana, anclaje) {
    if (estaCercaDelAnclaje(ventana, anclaje)) {
        const rectAnclaje = anclaje.getBoundingClientRect();
        const rectVentana = ventana.getBoundingClientRect();
        const nuevoX = rectAnclaje.left + (rectAnclaje.width - rectVentana.width) / 2;
        const nuevoY = rectAnclaje.top + (rectAnclaje.height - rectVentana.height) / 2;
        ventana.style.left = nuevoX - compensasionx + 'px';
        ventana.style.top = nuevoY - compensasiony + 'px';
        ventana.style.zIndex = '0';
        anclaje.style.zIndex = '-2';
    }
}

function iniciarArrastreVentana(e) {
    const ventana = e.currentTarget;
    const rectVentana = ventana.getBoundingClientRect();
    ventana.style.zIndex = '3';
    offsetsVentanas[ventana.id] = {
        offsetX: e.clientX - rectVentana.left,
        offsetY: e.clientY - rectVentana.top
    };
    ventana.addEventListener('mousemove', arrastrarVentana);
    ventana.addEventListener('mouseup', detenerArrastreVentana);
}

function arrastrarVentana(e) {
    const ventana = e.currentTarget;
    const offset = offsetsVentanas[ventana.id];
    const x = e.clientX - offset.offsetX;
    const y = e.clientY - offset.offsetY;
    ventana.style.left = x - compensasionx + 'px';
    ventana.style.top = y -compensasiony + 'px';
}

function detenerArrastreVentana(e) {
    const ventana = e.currentTarget;
    ventana.style.zIndex = '1';
    ventana.removeEventListener('mousemove', arrastrarVentana);
    ventana.removeEventListener('mouseup', detenerArrastreVentana);
    anclajes.forEach(anclaje => {
        actualizarPosicionVentana(ventana, anclaje);
    });
}

function crearVentana() {
    const nuevaVentana = document.createElement('div');
    nuevaVentana.classList.add('ventana');
    const nuevaVentanaId = 'ventana' + (document.querySelectorAll('.ventana').length + 1);
    nuevaVentana.setAttribute('id', nuevaVentanaId);
    nuevaVentana.textContent = 'Ventana ' + (document.querySelectorAll('.ventana').length + 1);

    const contenedorVentanas = document.querySelector('.ventanas');
    contenedorVentanas.appendChild(nuevaVentana);

    nuevaVentana.addEventListener('mousedown', iniciarArrastreVentana);
}

crearVentana();

document.getElementById('formCrearVentanas').addEventListener('submit', function(event) {
    event.preventDefault();
    const cantidadVentanas = parseInt(document.getElementById('cantidadVentanas').value);
    for (let i = 0; i < cantidadVentanas; i++) {
        crearVentana();
    }
});

ventanas.forEach(ventana => {
    ventana.addEventListener('mousedown', iniciarArrastreVentana);
});
