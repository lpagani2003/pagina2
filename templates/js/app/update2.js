var args = location.search.substr(1).split('&');
console.log(location.search)
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtApellido").value = decodeURIComponent(parts[2][1])
document.getElementById("txtEmail").value =decodeURIComponent( parts[3][1])
document.getElementById("txtCV").value =decodeURIComponent( parts[4][1])
document.getElementById("txtPuesto").value =decodeURIComponent( parts[5][1])
document.getElementById("txtEstado").value =decodeURIComponent( parts[6][1])
document.getElementById("txtAnotaciones").value =decodeURIComponent( parts[7][1])
 
function modificar() {
    let id = document.getElementById("txtId").value
    let nom = document.getElementById("txtNombre").value
    let ape = document.getElementById("txtApellido").value
    let ema = document.getElementById("txtEmail").value
    let cv = document.getElementById("txtCV").value
    let puesto = document.getElementById("txtPuesto").value
    let est = parseInt(document.getElementById("txtEstado").value)
    let anot = document.getElementById("txtAnotaciones").value
    let postulante = {
        nombre: nom,
        apellido: ape,
        email: ema,
        cv: cv,
        puesto: puesto,
        estado: est,
        anotaciones: anot
    }
    let url = "http://lpagani2003.pythonanywhere.com/postulantes/"+id
    var options = {
        body: JSON.stringify(postulante),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            alert("Registro modificado")
            window.location.href = "/templates/admin/admin1.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
    //window.location.href = "index.html";  //NUEVO 
 
}