fetch("http://localhost:9998/news")
  .then(response => response.json())
  .then(noticiasJSON => {
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
    window.addEventListener("load", cargarNoticias);
  })
  .catch(error => console.error("Error al obtener las noticias:", error));