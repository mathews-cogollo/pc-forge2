function togglePassword(id) {
    const passwordField = document.getElementById(id);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        document.querySelector(`#${id} + .toggle-password`).textContent = "Ocultar";
    } else {
        passwordField.type = "password";
        document.querySelector(`#${id} + .toggle-password`).textContent = "Mostrar";
    }
}

function mostrarPopup(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "block";
    }
}

function ocultarPopup(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "none";
    }
}

function saveUser() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    saveUserPost(nombre, apellido, correo, contraseña);
}

const saveUserPost = async (nombreReq, apellidoReq, correoReq, contraseñaReq) => {
    var url = "http://localhost:9998/user/save";
    var data = { nombre: nombreReq, apellido: apellidoReq, correo: correoReq, contraseña: contraseñaReq };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
};

function loginUser() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("login-password").value;

    loginUserPost(usuario, contraseña);
}

const loginUserPost = async (usuarioReq, contraseñaReq) => {
    var url = "http://localhost:8080/user/login";
    var data = { usuario: usuarioReq, contraseña: contraseñaReq };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
};
