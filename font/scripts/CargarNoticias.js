// Datos JSON simulados (puedes reemplazarlos con una solicitud HTTP para obtener datos reales)
var noticiasJSON = {
    "noticias": [
      {
        "id": 1,
        "titulo": "Título de la noticia 1",
        "imagen": "font/recursos/logo_martillo.png",
        "resumen": "Este es el resumen de la noticia 1.",
        "fecha": "2024-03-22",
        "enlace": "enlace_a_la_noticia_1"
      },
      {
        "id": 2,
        "titulo": "Título de la noticia 2",
        "imagen": "font/recursos/logo_Pr.png",
        "resumen": "Este es el resumen de la noticia 2.",
        "fecha": "2024-03-22",
        "enlace": "enlace_a_la_noticia_2"
      },
      {
        "id": 3,
        "titulo": "Título de la noticia 3",
        "imagen": "font/recursos/logo_Pr.png",
        "resumen": "Este es el resumen de la noticia 3.",
        "fecha": "2024-03-22",
        "enlace": "enlace_a_la_noticia_3"
      }
    ]
  };

  // Función para cargar las noticias en el contenedor
  function cargarNoticias() {
    var contenedor = document.getElementById('news-container');

    noticiasJSON.noticias.forEach(function(noticia) {
      var newsContainer = document.createElement('div');
      newsContainer.classList.add('newsInfo');

      var contenido = `
        <a href="${noticia.enlace}" target="_blank">
          <img src="${noticia.imagen}" alt="${noticia.titulo}">
          <h1>${noticia.titulo}</h1>
          <p class="newsText">${noticia.resumen}</p>
          <p class="fecha">${noticia.fecha}</p>
        </a>
      `;

      newsContainer.innerHTML = contenido;
      contenedor.appendChild(newsContainer);
    });
  }

  // Llamar a la función para cargar las noticias al cargar la página
  window.onload = function() {
    cargarNoticias();
  };