// windowLogic.js

// Lógica relacionada con la creación y manipulación de ventanas

const ventanasPorCategoria = {};

function crearVentana(componente, categoria) {
    // Obtener los datos del componente seleccionado
    const componentes = datoscomponentes.componentes[0][categoria];
    const datosComponente = componentes.find(comp => comp.nombre === componente);

    // Crear la ventana en la interfaz (si es necesario)
    const nuevaVentana = document.createElement('div');
    nuevaVentana.classList.add('ventana');
    const nuevaVentanaId = 'ventana' + (document.querySelectorAll('.ventana').length + 1);
    nuevaVentana.setAttribute('id', nuevaVentanaId);
    nuevaVentana.textContent = `${categoria}: ${componente}`;

    const contenedorVentanas = document.querySelector('.ventanas');
    contenedorVentanas.insertBefore(nuevaVentana, contenedorVentanas.firstChild); // Inserta la nueva ventana antes de la primera ventana existente

    nuevaVentana.addEventListener('mousedown', iniciarArrastreVentana);

    // Eliminar los datos anteriores de la categoría
    ventanasPorCategoria[categoria] = [];

    // Agregar el nuevo componente al array correspondiente
    ventanasPorCategoria[categoria].push({
        componente: componente,
        precio: datosComponente.precio
    });

    mostrarInfo();
}

export { crearVentana, ventanasPorCategoria };
