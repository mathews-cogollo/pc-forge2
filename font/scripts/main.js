// main.js

// Archivo principal donde se importan los otros módulos y se establecen las interacciones principales

import { iniciarArrastreVentana, actualizarPosicionVentana, resetearColoresAnclajes } from './dragLogic.js';
import { crearVentana, ventanasPorCategoria } from './windowLogic.js';
import { selectCategoria, selectComponente, botonCrearVentana } from './uiLogic.js';

const ventanas = document.querySelectorAll('.ventana');
const anclajes = document.querySelectorAll('.anclaje');
const formCrearVentana = document.getElementById('formCrearVentana');

ventanas.forEach(ventana => {
    ventana.addEventListener('mousedown', iniciarArrastreVentana);
});

formCrearVentana.addEventListener('submit', function(event) {
    event.preventDefault();
    const categoriaSeleccionada = selectCategoria.value;
    const componenteSeleccionado = selectComponente.value;
    if (categoriaSeleccionada !== "" && componenteSeleccionado !== "") {
        if (!categoriasAbiertas.includes(categoriaSeleccionada)) {
            categoriasAbiertas.push(categoriaSeleccionada);
            crearVentana(componenteSeleccionado, categoriaSeleccionada);
        } else {
            alert("Ya hay una ventana abierta para esta categoría.");
        }
    } else {
        alert("Por favor, seleccione una categoría y un componente antes de crear la ventana.");
    }
});
