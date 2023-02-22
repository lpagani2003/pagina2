function guardar1() {

    
    let nom = document.getElementById("txtNombre").value
    let ape = document.getElementById("txtApellido").value
    let ema = document.getElementById("txtEmail").value
    let cv = document.getElementById("txtCV").value
    let are = "";
    let radioButtonSeleccionado = document.querySelector('input[name="area"]:checked');
    if (radioButtonSeleccionado) {
        are = radioButtonSeleccionado.value;
    }
    let pasantes = {
        nombre: nom,
        apellido: ape,
        email: ema,
        cv: cv,
        area: are,
        estado: 0,
        anotaciones: ""
    }
    let url = "http://lpagani2003.pythonanywhere.com/pasantes"
    var options = {
        body: JSON.stringify(pasantes), 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "/templates/index.html";  //NUEVO  
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar")
            console.error(err);
        })
    }
  