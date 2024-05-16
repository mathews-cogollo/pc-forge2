function registrarUsuario(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    var formData = new FormData(document.getElementById('register-form'));
    var jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    fetch('/api/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Error al registrar usuario');
        }
        return response.json();
    })
    .then(function(data) {
        alert(data); // Muestra el mensaje de éxito
        document.getElementById('register-form').reset(); // Reinicia el formulario después de registrar
    })
    .catch(function(error) {
        console.error('Error:', error);
        alert('Error al registrar usuario');
    });
}

function togglePassword(inputId) {
    var x = document.getElementById(inputId);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}