// Datos JSON simulados (puedes reemplazarlos con una solicitud HTTP para obtener datos reales)
var noticiasJSON = {
  "noticias": [
    {
      "id": 1,
      "titulo": "Inauguración de nuevo centro comunitario",
      "imagen": "recursos/logo_martillo.png",
      "resumen": "El alcalde cortó la cinta en la inauguración del nuevo centro comunitario, que promete ser un espacio de reunión para los residentes del barrio.",
      "fecha": "2024-03-22",
      "enlace": ""
    },
    {
      "id": 2,
      "titulo": "Lanzamiento de nueva línea de productos",
      "imagen": "recursos/logo_texto.png",
      "resumen": "La empresa líder en tecnología anunció el lanzamiento de una emocionante línea de productos que promete revolucionar el mercado.",
      "fecha": "2024-03-22",
      "enlace": "enlace_a_la_noticia_2"
    },
    {
      "id": 3,
      "titulo": "Descubrimiento científico revelador",
      "imagen": "recursos/logo_Pr.png",
      "resumen": "Científicos de renombre mundial anunciaron el descubrimiento de un nuevo fenómeno cósmico que desafía nuestras comprensiones actuales del universo.",
      "fecha": "2024-03-22",
      "enlace": "enlace_a_la_noticia_3"
    },
    {
      "id": 4,
      "titulo": "Nueva investigación sobre cambio climático",
      "imagen": "recursos/logo_Pr.png",
      "resumen": "Un equipo internacional de científicos publicó los resultados de una nueva investigación que destaca la urgencia de tomar medidas para abordar el cambio climático.",
      "fecha": "2024-03-22",
      "enlace": "enlace_a_la_noticia_3"
    },
    {
      "id": 5,
      "titulo": "Evento cultural multitudinario",
      "imagen": "recursos/logo_Pr.png",
      "resumen": "Miles de personas asistieron al evento cultural anual, que ofreció una variedad de actuaciones, exposiciones y actividades para toda la familia.",
      "fecha": "2024-03-22",
      "enlace": "enlace_a_la_noticia_3"
    },
    {
      "id": 6,
      "titulo": "Nueva ley de protección ambiental",
      "imagen": "recursos/logo_Pr.png",
      "resumen": "El gobierno anunció la aprobación de una nueva ley de protección ambiental que busca salvaguardar los recursos naturales y mitigar el impacto del cambio climático.",
      "fecha": "2024-03-22",
      "enlace": "enlace_a_la_noticia_3"
    },
    {
      "id": 7,
      "titulo": "Nueva ley de protección ambiental",
      "imagen": "recursos/logo_martillo.png",
      "resumen": "El gobierno anunció la aprobación de una nueva ley de protección ambiental que busca salvaguardar los recursos naturales y mitigar el impacto del cambio climático.",
      "fecha": "2024-03-22",
      "enlace": "enlace_a_la_noticia_3"
    }
  ]
}
 // Función para cargar las noticias en el contenedor
 function cargarNoticias() {
  var contenedor = document.getElementById('news-container');
  noticiasJSON.noticias.forEach(function(noticia) {
    var newsContainer = document.createElement('div');
    newsContainer.classList.add('newsInfo');
    var contenido = `
    <a href="${noticia.enlace}" target="_blank">
      <div class="imgnot">
      <img src="${noticia.imagen}" alt="${noticia.titulo}">
      </div>
      <h1>${noticia.titulo}</h1>
      <p class="newsText">${noticia.resumen}</p>
      <p class="fecha">${noticia.fecha}</p>
    </a>
  `;

  newsContainer.innerHTML = contenido;
  contenedor.appendChild(newsContainer);
});
}