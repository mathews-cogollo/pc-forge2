// Datos JSON simulados (puedes reemplazarlos con una solicitud HTTP para obtener datos reales)
var datosplano = {
  "planos": [
    {
      "ID": "1",
      "emailAutor": "ejemplo@correo.com",
      "fecha": "2024-03-22",
      "imagen": "recursos/imagen_plano.png",
      "Unidad de Almacenamiento": {
        "tipo": "SSD",
        "capacidad": "1TB"
      },
      "Placa Base": {
        "marca": "ASUS",
        "modelo": "ROG Strix X570-E"
      },
      "Fuente de Poder": {
        "marca": "Corsair",
        "potencia": "750W"
      },
      "Procesador": {
        "marca": "AMD",
        "modelo": "Ryzen 9 5900X",
        "velocidad": "3.7 GHz"
      },
      "Tarjeta RAM": {
        "marca": "G.Skill",
        "capacidad": "32GB",
        "velocidad": "3600 MHz"
      },
      "Tarjeta de Red": {
        "tipo": "Ethernet",
        "velocidad": "1 Gbps"
      },
      "Tarjeta de Sonido": {
        "tipo": "Integrada"
      },
      "Tarjeta Gráfica": {
        "marca": "NVIDIA",
        "modelo": "GeForce RTX 3080",
        "memoria": "10GB GDDR6X"
      },
      "Unidad de Enfriamiento": {
        "tipo": "Refrigeración líquida"
      },
      "Gabinete": {
        "marca": "NZXT",
        "modelo": "H510"
      }
    },
    {
      "ID": "2",
      "emailAutor": "ejemplo@correo.com",
      "fecha": "2024-03-22",
      "imagen": "recursos/imagen_plano.png",
      "Unidad de Almacenamiento": {
        "tipo": "SSD",
        "capacidad": "1TB"
      },
      "Placa Base": {
        "marca": "ASUS",
        "modelo": "ROG Strix X570-E"
      },
      "Fuente de Poder": {
        "marca": "Corsair",
        "potencia": "750W"
      },
      "Procesador": {
        "marca": "AMD",
        "modelo": "Ryzen 9 5900X",
        "velocidad": "3.7 GHz"
      },
      "Tarjeta RAM": {
        "marca": "G.Skill",
        "capacidad": "32GB",
        "velocidad": "3600 MHz"
      },
      "Tarjeta de Red": {
        "tipo": "Ethernet",
        "velocidad": "1 Gbps"
      },
      "Tarjeta de Sonido": {
        "tipo": "Integrada"
      },
      "Tarjeta Gráfica": {
        "marca": "NVIDIA",
        "modelo": "GeForce RTX 3080",
        "memoria": "10GB GDDR6X"
      },
      "Unidad de Enfriamiento": {
        "tipo": "Refrigeración líquida"
      },
      "Gabinete": {
        "marca": "NZXT",
        "modelo": "H510"
      }
    },
    {
      "ID": "3",
      "emailAutor": "ejemplo@correo.com",
      "fecha": "2024-03-22",
      "imagen": "recursos/imagen_plano.png",
      "Unidad de Almacenamiento": {
        "tipo": "SSD",
        "capacidad": "1TB"
      },
      "Placa Base": {
        "marca": "ASUS",
        "modelo": "ROG Strix X570-E"
      },
      "Fuente de Poder": {
        "marca": "Corsair",
        "potencia": "750W"
      },
      "Procesador": {
        "marca": "AMD",
        "modelo": "Ryzen 9 5900X",
        "velocidad": "3.7 GHz"
      },
      "Tarjeta RAM": {
        "marca": "G.Skill",
        "capacidad": "32GB",
        "velocidad": "3600 MHz"
      },
      "Tarjeta de Red": {
        "tipo": "Ethernet",
        "velocidad": "1 Gbps"
      },
      "Tarjeta de Sonido": {
        "tipo": "Integrada"
      },
      "Tarjeta Gráfica": {
        "marca": "NVIDIA",
        "modelo": "GeForce RTX 3080",
        "memoria": "10GB GDDR6X"
      },
      "Unidad de Enfriamiento": {
        "tipo": "Refrigeración líquida"
      },
      "Gabinete": {
        "marca": "NZXT",
        "modelo": "H510"
      }
    }
  ]
};

// Función para cargar los datos del plano en el contenedor
function cargarDatosplano() {
  var contenedor = document.getElementById('planos-container');

  datosplano.planos.forEach(function(plano) {
    var planoContainer = document.createElement('div');
    planoContainer.classList.add('planoInfo');

    var contenido = `
      <div>
        <img src="${plano.imagen}" alt="plano ${plano.ID}">
        <h1>plano ${plano.ID}</h1>
        <p class="fecha">Fecha de montaje: ${plano.fecha}</p>
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
      </div>
    `;

    planoContainer.innerHTML = contenido;
    contenedor.appendChild(planoContainer);
  });
}

// Llamar a la función para cargar los datos del plano al cargar la página

