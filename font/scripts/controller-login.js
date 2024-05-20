
async function login() {
    const response = await fetch("http://localhost:8099/person");
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contraseñaUsuario = document.getElementById("contraseñaUsuario").value;
    var data = {
        nombreUsuario: nombreUsuario,
        contraseñaUsuario: contraseñaUsuario
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Credenciales inválidas');
        }
        return response.text();
    })
    .then(token => {
        // Guardar el token de sesión en el almacenamiento local
        localStorage.setItem('token', token);
        console.log('Token de sesión guardado:', token);
        // Redirigir o realizar otras acciones después del inicio de sesión exitoso
    })
    .catch(error => {
        // Manejar el error de inicio de sesión
        console.error('Error de inicio de sesión:', error.message);
        document.getElementById("error").innerText = error.message;
    });
}

window.onload = function() {
    var token = localStorage.getItem('token');
    if (token) {
        // Aquí puedes realizar una verificación adicional del token si es necesario
        console.log('Token de sesión encontrado:', token);
        // Redirigir o realizar otras acciones para autenticar al usuario automáticamente
    }
};