// Función para enviar la solicitud de inicio de sesión
function login() {
    // Obtener los valores del formulario de inicio de sesión
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var contraseñaUsuario = document.getElementById('contraseñaUsuario').value;

    // Crear objeto de datos para enviar al controlador
    var data = {
        nombreUsuario: nombreUsuario,
        contraseñaUsuario: contraseñaUsuario
    };

    // Realizar una solicitud POST al controlador
    fetch('/token/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta es exitosa, obtener el token
            return response.text();
        } else {
            // Si la respuesta es un error, mostrar un mensaje de error
            throw new Error('Error de autenticación');
        }
    })
    .then(token => {
        // Manejar el token JWT, por ejemplo, guardar en el almacenamiento local
        localStorage.setItem('token', token);
        // Redirigir a otra página o realizar otra acción después de iniciar sesión
        window.location.href = '/perfil';
    })
    .catch(error => {
        // Manejar cualquier error de autenticación
        console.error('Error de autenticación:', error.message);
        // Mostrar un mensaje de error en la interfaz de usuario
        document.getElementById('error').innerText = 'Credenciales incorrectas';
    });
}