fetch("http://localhost:9998/planos")
  .then(response => response.json())
  .then(datosplano => {
    function cargarDatosPlano() {
      var contenedor = document.getElementById('planos-container');

      datosplano.planos.forEach(function(plano) {
        var planoContainer = document.createElement('div');
        planoContainer.classList.add('planoInfo');
        planoContainer.style.backgroundImage = `url('${plano.imagen}')`;

        var contenido = `
          <div>
            <h1>plano ${plano.ID}</h1>
            <div class="contenidoHover">
              <h2>Componentes:</h2>
              <ul>
                <li><strong>Unidad de Almacenamiento:</strong> ${plano["Unidad de Almacenamiento"].tipo} ${plano["Unidad de Almacenamiento"].capacidad}</li>
                <li><strong>Placa Base:</strong> ${plano["Placa Base"].marca} ${plano["Placa Base"].modelo}</li>
                <li><strong>Fuente de Poder:</strong> ${plano["Fuente de Poder"].marca} ${plano["Fuente de Poder"].potencia}</li>
                <li><strong>Procesador:</strong> ${plano.Procesador.marca} ${plano.Procesador.modelo} (${plano.Procesador.velocidad})</li>
                <li><strong>Tarjeta RAM:</strong> ${plano["Tarjeta RAM"].marca} ${plano["Tarjeta RAM"].capacidad} (${plano["Tarjeta RAM"].velocidad})</li>
                <li><strong>Tarjeta de Red:</strong> ${plano["Tarjeta de Red"].tipo} (${plano["Tarjeta de Red"].velocidad})</li>
                <li><strong>Tarjeta de Sonido:</strong> ${plano["Tarjeta de Sonido"].tipo}</li>
                <li><strong>Tarjeta Gráfica:</strong> ${plano["Tarjeta Gráfica"].marca} ${plano["Tarjeta Gráfica"].modelo} (${plano["Tarjeta Gráfica"].memoria})</li>
                <li><strong>Unidad de Enfriamiento:</strong> ${plano["Unidad de Enfriamiento"].tipo}</li>
                <li><strong>Gabinete:</strong> ${plano.Gabinete.marca} ${plano.Gabinete.modelo}</li>
              </ul>
              <p class="fecha">Fecha de montaje: ${plano.fecha}</p>
            </div>
          </div>
        `;

        planoContainer.innerHTML = contenido;
        contenedor.appendChild(planoContainer);
      });
    }

    window.addEventListener("load", cargarDatosPlano);
  })
  .catch(error => console.error("Error al obtener los planos:", error));