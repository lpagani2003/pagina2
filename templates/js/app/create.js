function guardar() {

    let nombre = document.getElementById("txtNombre").value
    let apellido = document.getElementById("txtApellido").value
    let email = document.getElementById("txtEmail").value
    let cv = document.getElementById("txtCV").value
    let area;

    const radioButtons = document.querySelectorAll('input[type="radio"][name="area"]');

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            area = radioButton.value;
        }
    }

    let pasante = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        cv: cv,
        area: area,
        estado: 0,
        anotaciones: ""
    }
    let url = "http://localhost:5000/pasantes"
    var options = {
        body: JSON.stringify(pasante),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "/templates/index.html";
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar")
            console.error(err);
        })
}
