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
    
    function actualizarPosicionVentana(ventana, anclaje) {
      if (estaCercaDelAnclaje(ventana, anclaje)) {
          const rectAnclaje = anclaje.getBoundingClientRect();
          const rectVentana = ventana.getBoundingClientRect();
          const nuevoX = rectAnclaje.left + (rectAnclaje.width - rectVentana.width) / 2;
          const nuevoY = rectAnclaje.top + (rectAnclaje.height - rectVentana.height) / 2;
          ventana.style.left = nuevoX + 'px';
          ventana.style.top = nuevoY + 'px';
          ventana.style.zIndex = '10';
          anclaje.style.zIndex = '0';
          
          const categoriaVentana = ventana.textContent.split(': ')[0];
          const categoriaAnclaje = anclaje.dataset.categoria;
          if (categoriaVentana === categoriaAnclaje) {
              anclaje.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'; 
              anclaje.style.borderColor = 'green'; 
          } else {
              anclaje.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'; 
              anclaje.style.borderColor = 'red'; 
          }
      } else {
         
          anclaje.style.backgroundColor = 'rgb(34, 40, 49)';
    
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
    
            
            if (ventanasPorCategoria[categoria]) {
                ventanasPorCategoria[categoria] = []; 
            }
    
          
            mostrarInfo();
        } else {
            anclajes.forEach(anclaje => {
                actualizarPosicionVentana(ventana, anclaje);
            });
            mostrarInfo(); 
        }
    }
    
    
    


  
    
    function resetearColoresAnclajes() {
        anclajes.forEach(anclaje => {
            anclaje.style.backgroundColor = 'rgb(34, 40, 49)';
    
        });
    }
    
    window.addEventListener('load', resetearColoresAnclajes);
    
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
  
  };
  function crearVentana(componente, categoria) {
    
    const componentes = datoscomponentes.componentes[0][categoria];
    const datosComponente = componentes.find(comp => comp.nombre === componente);
  
    
    const precioNumero = parseInt(datosComponente.precio); 
    const nuevaVentana = document.createElement('div');
    nuevaVentana.classList.add('ventana');
    const nuevaVentanaId = obtenerIniciales(categoria); 
    nuevaVentana.setAttribute('id', nuevaVentanaId);
    
 
    const contenidoHover = document.createElement('div');
    contenidoHover.classList.add('contenidoHover');

   
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


    if (imagenesPorCategoria[categoria]) {
      nuevaVentana.style.backgroundImage = imagenesPorCategoria[categoria];
    }
  
    if (filtroColorPorMarca[datosComponente.marca]) {
      nuevaVentana.classList.add(filtroColorPorMarca[datosComponente.marca]);
    }
  
    const contenedorVentanas = document.querySelector('.ventanas');
    contenedorVentanas.insertBefore(nuevaVentana, contenedorVentanas.firstChild); 
    nuevaVentana.addEventListener('mousedown', iniciarArrastreVentana);


    ajustarPosicionPopup(contenidoHover);

    ventanasPorCategoria[categoria] = [];

    ventanasPorCategoria[categoria].push({
        componente: componente,
        precio: precioNumero,
        marca: datosComponente.marca 
    });
  
    mostrarInfo();
    nuevaVentana.addEventListener('mouseover', function() {
        const contenidoHover = this.querySelector('.contenidoHover');
        contenidoHover.style.display = 'block';
        ajustarPosicionPopup(contenidoHover);

        
        ajusteInterval = setInterval(() => {
            ajustarPosicionPopup(contenidoHover);
        }, 100);
    });

    nuevaVentana.addEventListener('mouseleave', function() {
        this.querySelector('.contenidoHover').style.display = 'none';
        
    
        clearInterval(ajusteInterval);
    });
}






function obtenerIniciales(categoria) {
  return categoria.split(' ').map(word => word.charAt(0)).join('');
}

crearVentana(componente, "Gabinete");
crearVentana(componente, "Placa Base");
crearVentana(componente, "Tarjeta RAM");
crearVentana(componente, "Unidad de Almacenamiento");
crearVentana(componente, "Procesador");
crearVentana(componente, "Tarjeta Gráfica");
crearVentana(componente, "Unidad de Enfriamiento");
crearVentana(componente, "Fuente de Poder");






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


function mostrarInfo() {
  const infoDiv = document.querySelector('.info');
  infoDiv.innerHTML = ''; 

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
      total += ventana.precio; 
    });

    infoDiv.appendChild(categoriaDiv);
  }

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');
  totalDiv.textContent = `Total: $${total}`;
  infoDiv.appendChild(totalDiv);
}



mostrarInfo();
function obtenerIniciales(texto) {
  return texto.split(' ').map(word => word.slice(0, 2)).join('');
}

function ajustarPosicionPopup(contenidoHover) {
    const rectPopup = contenidoHover.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const limite = 20; 
    const cercaBordeSuperior = rectPopup.top < limite;
    const cercaBordeInferior = rectPopup.bottom > (windowHeight - limite);
    const cercaBordeIzquierdo = rectPopup.left < limite;
    const cercaBordeDerecho = rectPopup.right > (windowWidth - limite);

  
    if (cercaBordeSuperior) {
        contenidoHover.style.top = "";
        contenidoHover.style.bottom = "100%";
        document.documentElement.style.setProperty('--before-top', '20%');
    }
    if (cercaBordeInferior) {
        contenidoHover.style.top = "-125%";
        contenidoHover.style.bottom = "";
        document.documentElement.style.setProperty('--before-top', '80%');
    }
}

document.querySelectorAll('.ventanas .ventana').forEach(ventana => {
    let ajusteInterval; 

    ventana.addEventListener('mouseover', function() {
        const contenidoHover = this.querySelector('.contenidoHover');
        contenidoHover.style.display = 'block';
        ajustarPosicionPopup(contenidoHover);

        ajusteInterval = setInterval(() => {
            ajustarPosicionPopup(contenidoHover);
        }, 100);
    });

    ventana.addEventListener('mouseleave', function() {
        this.querySelector('.contenidoHover').style.display = 'none';

        clearInterval(ajusteInterval);
    });
});


