document.addEventListener('DOMContentLoaded', function() {
    var header = document.createElement('div');
    header.innerHTML = `
    <div class="cabecera">
        <a href="index.html">
            <img src="recursos/logo_texto.png" alt="logo_texto" style="width: 200px;">
        </a>
        <div  class="menu-barra">
            <a href="index.html" class="menu-item">Inicio</a>
            <a href="#" class="menu-item">Nosotros</a>
            <a class="menu-item" onclick="mostrarPopup('popup-registro')">Registro</a>
            <a class="menu-item" onclick="mostrarPopup('popup-login')">Iniciar Sesión</a>
            <a href="camino.html" class="menu-item">armado</a>
        </div>
    </div>
    `;

    // Replace the header placeholder with the "cabecera"
    var headerPlaceholder = document.getElementById('header-placeholder');
    headerPlaceholder.parentNode.replaceChild(header, headerPlaceholder);
});