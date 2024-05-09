
function mostrarElemento(id) {
var elementos = document.querySelectorAll('object[type="text/html"]');
elementos.forEach(function(elemento) {
if (elemento.id === id) {
    elemento.style.display = 'block';
} else {
    elemento.style.display = 'none';
}
});
}
 

mostrarElemento('index');
