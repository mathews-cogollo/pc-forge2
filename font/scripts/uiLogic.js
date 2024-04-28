// uiLogic.js

// Lógica relacionada con la interfaz de usuario

const selectCategoria = document.createElement('select');
selectCategoria.setAttribute('id', 'categoriaSeleccionada');
const opcionPorDefectoCategoria = document.createElement('option');
opcionPorDefectoCategoria.value = "";
opcionPorDefectoCategoria.textContent = "Seleccione una categoría";
selectCategoria.appendChild(opcionPorDefectoCategoria);

for (const categoria in datoscomponentes.componentes[0]) {
    const opcionCategoria = document.createElement('option');
    opcionCategoria.value = categoria;
    opcionCategoria.textContent = categoria;
    selectCategoria.appendChild(opcionCategoria);
}

const selectComponente = document.createElement('select');
selectComponente.setAttribute('id', 'componenteSeleccionado');
const opcionPorDefectoComponente = document.createElement('option');
opcionPorDefectoComponente.value = "";
opcionPorDefectoComponente.textContent = "Seleccione un componente";
selectComponente.appendChild(opcionPorDefectoComponente);

selectCategoria.addEventListener('change', function() {
    const categoriaSeleccionada = this.value;
    selectComponente.innerHTML = "";
    const opcionPorDefecto = document.createElement('option');
    opcionPorDefecto.value = "";
    opcionPorDefecto.textContent = "Seleccione un componente";
    selectComponente.appendChild(opcionPorDefecto);
    if (categoriaSeleccionada !== "") {
        const componentes = datoscomponentes.componentes[0][categoriaSeleccionada];
        componentes.forEach(componente => {
            const opcionComponente = document.createElement('option');
            opcionComponente.value = componente.nombre;
            opcionComponente.textContent = componente.nombre;
            selectComponente.appendChild(opcionComponente);
        });
    }
});


const botonCrearVentana = document.createElement('button');
botonCrearVentana.setAttribute('type', 'submit');
botonCrearVentana.textContent = 'Crear Ventana';

formCrearVentana.appendChild(selectCategoria);
formCrearVentana.appendChild(selectComponente);
formCrearVentana.appendChild(botonCrearVentana);

export { selectCategoria, selectComponente, botonCrearVentana };
