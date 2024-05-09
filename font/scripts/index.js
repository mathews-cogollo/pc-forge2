const listUsers = async () => {
    const response = await fetch("http://localhost:8080/person");
    const users = await response.json();

     // Obtener un índice aleatorio
     var indiceAleatorio = Math.floor(Math.random() * users.length);

     // Obtener el elemento donde se mostrará el lema
      var lemaElemento = document.getElementById('textoLema');

     // Mostrar el lema aleatorio en el elemento
     lemaElemento.innerText = users[indiceAleatorio].name;





    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.dni}</td>
        <td class='centered'>${user.name}</td>
        </tr>`;
    });
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});

function savePerson() {

   var name = document.getElementById("name").value;
   var dni = document.getElementById("dni").value;

   savePersonPost(dni, name);
}

const savePersonPost = async (dniReq, nameReq) => {

    var url = "http://localhost:9998/person/save";
    var data = { dni: dniReq, name: nameReq };
    
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        "Authorization": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
};
