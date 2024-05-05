var datoscomponentes = {
  "componentes": [
      {
          "Gabinete": [
              {
                  "nombre": "NZXT H510",
                  "tipo": "Gabinete",
                  "formato": "ATX Mid Tower",
                  "ventiladores_incluidos": "2 x 120 mm",
                  "bahias_unidades": "2 x 3.5\", 2 x 2.5\"",
                  "precio": "100",
                  "marca": "NZXT"
              },
              {
                  "nombre": "Fractal Design Meshify C",
                  "tipo": "Gabinete",
                  "formato": "ATX Mid Tower",
                  "ventiladores_incluidos": "2 x 120 mm",
                  "bahias_unidades": "2 x 3.5\", 3 x 2.5\"",
                  "precio": "120",
                  "marca": "Fractal Design"
              }
          ],
          "Placa Base": [
              {
                  "nombre": "ASUS ROG Strix X570-E Gaming",
                  "tipo": "Placa Base",
                  "socket": "AM4",
                  "formato": "ATX",
                  "chipset": "AMD X570",
                  "memoria_maxima": "128 GB DDR4",
                  "puertos_usb": "USB 3.2 Gen 2",
                  "precio": "400",
                  "marca": "ASUS"
              },
              {
                  "nombre": "GIGABYTE Z490 AORUS XTREME WATERFORCE",
                  "tipo": "Placa Base",
                  "socket": "LGA1200",
                  "formato": "E-ATX",
                  "chipset": "Intel Z490",
                  "memoria_maxima": "128 GB DDR4",
                  "puertos_usb": "USB 3.2 Gen 2x2",
                  "precio": "450",
                  "marca": "GIGABYTE"
              }
          ],
          "Tarjeta RAM": [
              {
                  "nombre": "Corsair Vengeance RGB Pro",
                  "tipo": "Tarjeta RAM",
                  "capacidad": "32 GB (2 x 16 GB)",
                  "frecuencia": "3600 MHz",
                  "tipo_memoria": "DDR4",
                  "latencia": "CL18",
                  "precio": "250",
                  "marca": "Corsair"
              },
              {
                  "nombre": "G.Skill Trident Z Neo",
                  "tipo": "Tarjeta RAM",
                  "capacidad": "64 GB (2 x 32 GB)",
                  "frecuencia": "3600 MHz",
                  "tipo_memoria": "DDR4",
                  "latencia": "CL16",
                  "precio": "500",
                  "marca": "G.Skill"
              }
          ],
          "Unidad de Almacenamiento": [
              {
                  "nombre": "SSD Samsung 970 EVO Plus",
                  "tipo": "Unidad de Almacenamiento",
                  "capacidad": "1 TB",
                  "interfaz": "NVMe PCIe 3.0 x4",
                  "factor_de_forma": "M.2 2280",
                  "precio": "1000",
                  "marca": "Samsung"
              },
              {
                  "nombre": "HDD Seagate Barracuda",
                  "tipo": "Unidad de Almacenamiento",
                  "capacidad": "2 TB",
                  "velocidad_de_rotacion": "7200 RPM",
                  "interfaz": "SATA 6 Gb/s",
                  "factor_de_forma": "3.5 pulgadas",
                  "precio": "500",
                  "marca": "Seagate"
              }
          ],
          "Procesador": [
              {
                  "nombre": "AMD Ryzen 9 5900X",
                  "tipo": "Procesador",
                  "socket": "AM4",
                  "nucleos": "12",
                  "hilos": "24",
                  "frecuencia_base": "3.7 GHz",
                  "frecuencia_maxima": "4.8 GHz",
                  "precio": "550",
                  "marca": "AMD"
              },
              {
                  "nombre": "Intel Core i9-11900K",
                  "tipo": "Procesador",
                  "socket": "LGA1200",
                  "nucleos": "8",
                  "hilos": "16",
                  "frecuencia_base": "3.5 GHz",
                  "frecuencia_maxima": "5.3 GHz",
                  "precio": "600",
                  "marca": "Intel"
              }
          ],
          "Tarjeta Gráfica": [
              {
                  "nombre": "NVIDIA GeForce RTX 3080",
                  "tipo": "Tarjeta Gráfica",
                  "memoria": "10 GB GDDR6X",
                  "frecuencia_base": "1440 MHz",
                  "frecuencia_boost": "1710 MHz",
                  "interfaz": "PCI Express 4.0",
                  "precio": "900",
                  "marca": "NVIDIA"
              },
              {
                  "nombre": "AMD Radeon RX 6900 XT",
                  "tipo": "Tarjeta Gráfica",
                  "memoria": "16 GB GDDR6",
                  "frecuencia_base": "1825 MHz",
                  "frecuencia_boost": "2250 MHz",
                  "interfaz": "PCI Express 4.0",
                  "precio": "1000",
                  "marca": "AMD"
              }
          ],
          "Unidad de Enfriamiento": [
              {
                  "nombre": "NZXT Kraken X73",
                  "tipo": "Unidad de Enfriamiento",
                  "tipo_enfriamiento": "Líquida",
                  "tamaño_radiador": "360 mm",
                  "ventiladores": "3 x 120 mm",
                  "precio": "200",
                  "marca": "NZXT"
              },
              {
                  "nombre": "Noctua NH-D15",
                  "tipo": "Unidad de Enfriamiento",
                  "tipo_enfriamiento": "Aire",
                  "ventiladores": "2 x 140 mm",
                  "altura": "165 mm",
                  "precio": "100",
                  "marca": "Noctua"
              }
          ],
          "Fuente de Poder": [
              {
                  "nombre": "EVGA SuperNOVA 850 G5",
                  "tipo": "Fuente de Poder",
                  "potencia": "850 W",
                  "certificacion": "80 Plus Gold",
                  "modularidad": "Totalmente modular",
                  "precio": "200",
                  "marca": "EVGA"
              },
              {
                  "nombre": "Corsair RM850x",
                  "tipo": "Fuente de Poder",
                  "potencia": "850 W",
                  "certificacion": "80 Plus Gold",
                  "modularidad": "Totalmente modular",
                  "precio": "180",
                  "marca": "Corsair"
              }
          ]
      }
  ]
}


    const ventanas = document.querySelectorAll('.ventana');
    const anclajes = document.querySelectorAll('.anclaje');
    const offsetsVentanas = {};
    const distanciaAnclaje = 50;
    let categoriasAbiertas = [];
    
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
    
    function actualizarPosicionVentana(ventana, anclaje,contenidoHover) {
      if (estaCercaDelAnclaje(ventana, anclaje)) {
          const rectAnclaje = anclaje.getBoundingClientRect();
          const rectVentana = ventana.getBoundingClientRect();
          const nuevoX = rectAnclaje.left + (rectAnclaje.width - rectVentana.width) / 2;
          const nuevoY = rectAnclaje.top + (rectAnclaje.height - rectVentana.height) / 2;
          ventana.style.left = nuevoX + 'px';
          ventana.style.top = nuevoY + 'px';
          ventana.style.zIndex = '10';
          anclaje.style.zIndex = '0';
          contenidoHover.style.zIndex = 15;
          // Cambiar el color del anclaje dependiendo de si coincide con la ventana anclada
          const categoriaVentana = ventana.textContent.split(': ')[0];
          const categoriaAnclaje = anclaje.dataset.categoria;
          if (categoriaVentana === categoriaAnclaje) {
              anclaje.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'; // Verde si coincide
              anclaje.style.borderColor = 'green'; // Cambio de color del borde
          } else {
              anclaje.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'; // Rojo si no coincide
              anclaje.style.borderColor = 'red'; // Cambio de color del borde
          }
      } else {
          // Si no hay ventana anclada, volver al color original del anclaje y su borde
          anclaje.style.backgroundColor = 'rgb(34, 40, 49)';
        //   anclaje.style.borderColor = 'rgb(49, 54, 63)';
      }
  }
  
    
    
    
    function iniciarArrastreVentana(e) {
        const ventana = e.currentTarget;
        const rectVentana = ventana.getBoundingClientRect();
        ventana.style.zIndex = '11';
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
        ventana.style.left = x + 'px';
        ventana.style.top = y + 'px';
        ventana.style.opacity = '0.8';
    }
    
    function detenerArrastreVentana(e) {
        const ventana = e.currentTarget;
        ventana.style.opacity = '1';
        ventana.removeEventListener('mousemove', arrastrarVentana);
        ventana.removeEventListener('mouseup', detenerArrastreVentana);
        const anclaElimina = document.querySelector('.ancla-elimina');
        if (estaCercaDelAnclaje(ventana, anclaElimina)) {
            const categoria = ventana.textContent.split(': ')[0];
            const index = categoriasAbiertas.indexOf(categoria);
            if (index !== -1) {
                categoriasAbiertas.splice(index, 1);
            }
            ventana.remove();
    
            // Eliminar la ventana del array de ventanasPorCategoria
            if (ventanasPorCategoria[categoria]) {
                ventanasPorCategoria[categoria] = []; // Establecer en "..." los datos de la categoría
            }
    
            // Mostrar la información actualizada
            mostrarInfo();
        } else {
            anclajes.forEach(anclaje => {
                actualizarPosicionVentana(ventana, anclaje);
            });
            ventana.style.opacity = '1';
            mostrarInfo(); 
        }
    }
    
    
    


  
    
    function resetearColoresAnclajes() {
        anclajes.forEach(anclaje => {
            anclaje.style.backgroundColor = 'rgb(34, 40, 49)';
            //anclaje.style.borderColor = 'rgb(49, 54, 63)'; // Color original
        });
    }
    
    window.addEventListener('load', resetearColoresAnclajes); // Restablecer colores al cargar la página
    
    document.getElementById('formCrearVentana').addEventListener('submit', function(event) {
        event.preventDefault();
        const categoriaSeleccionada = document.getElementById('categoriaSeleccionada').value;
        const componenteSeleccionado = document.getElementById('componenteSeleccionado').value;
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
    

// Array para almacenar las ventanas según su categoría
const ventanasPorCategoria = {
  "Unidad de Almacenamiento": [],
  "Placa Base": [],
  "Fuente de Poder": [],
  "Procesador": [],
  "Tarjeta RAM": [],
  "Tarjeta Gráfica": [],
  "Unidad de Enfriamiento": [],
  "Gabinete": []
};

const imagenesPorCategoria = {
    "Gabinete": "url('recursos/gabinete.png')",
    "Placa Base": "url('recursos/placa_base.png')",
    "Tarjeta RAM": "url('recursos/tarjeta_ram.png')",
    "Unidad de Almacenamiento": "url('recursos/unidad_almacenamiento.png')",
    "Procesador": "url('recursos/procesador.png')",
    "Tarjeta Gráfica": "url('recursos/tarjeta_grafica.png')",
    "Unidad de Enfriamiento": "url('recursos/unidad_enfriamiento.png')",
    "Fuente de Poder": "url('recursos/fuente_poder.png')"
  };
  
  const filtroColorPorMarca = {
    "NZXT": "hue-rotate(90deg)",
    "Fractal Design": "hue-rotate(180deg)",
    "Corsair": "hue-rotate(270deg)",
    "EVGA": "hue-rotate(45deg)",
    "GIGABYTE": "hue-rotate(135deg)",
    "ASUS": "hue-rotate(225deg)",
    "Intel": "hue-rotate(315deg)",
    "AMD": "hue-rotate(90deg)",
    // Puedes agregar más marcas y filtros de color según sea necesario
  };
  function crearVentana(componente, categoria) {
    // Obtener los datos del componente seleccionado
    const componentes = datoscomponentes.componentes[0][categoria];
    const datosComponente = componentes.find(comp => comp.nombre === componente);
  
    // Convertir el precio a número
    const precioNumero = parseInt(datosComponente.precio); // o parseFloat(datosComponente.precio) si los precios pueden tener decimales
  
    // Crear la ventana en la interfaz (si es necesario)
    const nuevaVentana = document.createElement('div');
    nuevaVentana.classList.add('ventana');
    const nuevaVentanaId = obtenerIniciales(categoria); // Aquí se llama a la función obtenerIniciales solo con la categoría
    nuevaVentana.setAttribute('id', nuevaVentanaId);
    
    // Crear el div para el contenidoHover y agregar los datos del componente
    const contenidoHover = document.createElement('div');
    contenidoHover.classList.add('contenidoHover');

    // Crear el elemento h4 para el texto de la ventana
    const h4 = document.createElement('h4');
    h4.textContent = `${categoria}: ${componente}`;
    contenidoHover.appendChild(h4);

    for (const [clave, valor] of Object.entries(datosComponente)) {
        if(clave !== 'nombre') {
            const p = document.createElement('p');
            if (clave === 'precio') {
                p.textContent = `precio: $${valor}`;
            } else {
                p.textContent = `${clave}: ${typeof valor === 'string' ? `"${valor}"` : valor}`;
            }
            contenidoHover.appendChild(p);
        }
    }
    nuevaVentana.appendChild(contenidoHover);

    // Agregar imagen de acuerdo a la categoría
    if (imagenesPorCategoria[categoria]) {
      nuevaVentana.style.backgroundImage = imagenesPorCategoria[categoria];
    }
  
    if (filtroColorPorMarca[datosComponente.marca]) {
      nuevaVentana.classList.add(filtroColorPorMarca[datosComponente.marca]);
    }
  
    const contenedorVentanas = document.querySelector('.ventanas');
    contenedorVentanas.insertBefore(nuevaVentana, contenedorVentanas.firstChild); // Inserta la nueva ventana antes de la primera ventana existente
  
    nuevaVentana.addEventListener('mousedown', iniciarArrastreVentana);
  
    // Eliminar los datos anteriores de la categoría
    ventanasPorCategoria[categoria] = [];
  
    // Agregar el nuevo componente al array correspondiente con el precio convertido
    ventanasPorCategoria[categoria].push({
        componente: componente,
        precio: precioNumero,
        marca: datosComponente.marca // Guardar la marca del componente para el filtro de color
    });
  
    mostrarInfo();
}





// Función auxiliar para obtener las iniciales de una categoría
function obtenerIniciales(categoria) {
  return categoria.split(' ').map(word => word.charAt(0)).join('');
}

// Llamar a la función para crear las ventanas para cada categoría con los datos proporcionados
crearVentana("NZXT H510", "Gabinete");
crearVentana("ASUS ROG Strix X570-E Gaming", "Placa Base");
crearVentana("Corsair Vengeance RGB Pro", "Tarjeta RAM");
crearVentana("SSD Samsung 970 EVO Plus", "Unidad de Almacenamiento");
crearVentana("AMD Ryzen 9 5900X", "Procesador");
crearVentana("NVIDIA GeForce RTX 3080", "Tarjeta Gráfica");
crearVentana("NZXT Kraken X73", "Unidad de Enfriamiento");
crearVentana("EVGA SuperNOVA 850 G5", "Fuente de Poder");






const formCrearVentana = document.getElementById('formCrearVentana');

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

ventanas.forEach(ventana => {
    ventana.addEventListener('mousedown', iniciarArrastreVentana);
});

// La regla S2814 de SonarQube sugiere cambiar la concatenación de cadenas con el operador "+" en favor de utilizar plantillas de cadenas (template literals) para mejorar la legibilidad y prevenir errores de sintaxis.
function mostrarInfo() {
  const infoDiv = document.querySelector('.info');
  infoDiv.innerHTML = ''; // Limpiar el contenido anterior

  let total = 0;

  for (const categoria in ventanasPorCategoria) {
    const categoriaDiv = document.createElement('div');
    categoriaDiv.classList.add('cajaComp');
    categoriaDiv.setAttribute('id', `${obtenerIniciales(categoria)}`);
    categoriaDiv.innerHTML = `<h2>${categoria}</h2>`;

    const ventanas = ventanasPorCategoria[categoria];
    ventanas.forEach(ventana => {
      const ventanaInfoDiv = document.createElement('div');
      ventanaInfoDiv.innerHTML = `
        <div>
          <p>${ventana.componente}</p>
          <p>$${ventana.precio}</p>
        </div>
      `;
      categoriaDiv.appendChild(ventanaInfoDiv);
      total += ventana.precio; // Suma el precio de cada componente al total
    });

    infoDiv.appendChild(categoriaDiv);
  }

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');
  totalDiv.textContent = `Total: $${total}`;
  infoDiv.appendChild(totalDiv);
}



// Llamar a la función mostrarInfo para inicializar
mostrarInfo();
function obtenerIniciales(texto) {
  return texto.split(' ').map(word => word.slice(0, 2)).join('');
}

function ajustarPosicionPopup(contenidoHover) {
    const rectPopup = contenidoHover.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Verificar si el popup se encuentra cerca de los bordes
    const limite = 10; // Puedes ajustar este valor según tu preferencia
    const cercaBordeSuperior = rectPopup.top < limite;
    const cercaBordeInferior = rectPopup.bottom > (windowHeight - limite);
    const cercaBordeIzquierdo = rectPopup.left < limite;
    const cercaBordeDerecho = rectPopup.right > (windowWidth - limite);

    // Ajustar la posición del popup si está demasiado cerca de algún borde
    if (cercaBordeSuperior) {
        contenidoHover.style.top = '20%';
    }
    if (cercaBordeInferior) {
        contenidoHover.style.top = '-160%';
    }
    if (cercaBordeIzquierdo) {
        contenidoHover.style.left = '20%';
    }
    if (cercaBordeDerecho) {
        contenidoHover.style.left = '-160%';
    }
}

// Llamar a la función ajustarPosicionPopup después de mostrar el popup
document.querySelectorAll('.ventanas .ventana').forEach(ventana => {
    ventana.addEventListener('mouseover', function() {
        const contenidoHover = this.querySelector('.contenidoHover');
        contenidoHover.style.display = 'flex';
        ajustarPosicionPopup(contenidoHover);
    });

    ventana.addEventListener('mouseleave', function() {
        const contenidoHover = this.querySelector('.contenidoHover');
        contenidoHover.style.display = 'none';
        // Restaurar la posición inicial al salir del hover
        contenidoHover.style.top = '';
        contenidoHover.style.left = '';
    });
});

