const listUsers = async () => {
    const response = await fetch("http://localhost:8099/api/slogans/random");
    const users = await response.json();

   

  
      var lemaElemento = document.getElementById('textoLema');

 
     lemaElemento.innerText = slogans.name;

    let tableBody = ``;
    slogans.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.dni}</td>
        </tr>`;
    });

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
      method: "POST",
      body: JSON.stringify(data), 
      headers: {
        "Content-Type": "application/json",
        "Authorization": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
};
