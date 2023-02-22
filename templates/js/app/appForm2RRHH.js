async function postulante(id) {
    var fc = '';
  try {
    const response = await fetch("/templates/js/data/datapuesto.json");
    puestos = await response.json();
  } catch (err) {
    console.error("Error:", err.message);
  }

  const item = puestos.find(p => p.id === id);
  if (item) {
    console.log("Puesto:", item.puesto);
    // buscamos si ya existe un artículo con el mismo ID en la sección
    const existente = document.getElementById(`s5-${item.id}`);
    if (!existente) {
      fc += `
        <article class="clasif" id="s5-${item.id}">
          <div class="clasif-img">
            <img src="/templates/images/src/png-transparent-mountview-academy-of-theatre-arts-silhouette-person-silhouette-animals-head-silhouette.png"
            alt="perfil">
          </div>
          <div class="clasif-info">
            <button id="x" onclick="salir('s5-${item.id}')">X</button>
            <h1>${item.puesto}</h1>
            <p id="resumen">${item.resumen}</p>
            <h4>Actividades principales</h4>
            <p id="act">${item.actividades_principales}</p>
            <h4>Requisitos</h4>
            <p id="req">${item.requisitos}</p>
            <h4>Habilidades blandas</h4>
            <p id="hab">${item.habilidades_blandas}</p>
            <form>
              <div class="grid-item">
                <label for="txtNombre2">Nombre</label>
                <input type="text" class="form-control" name="txtNombre2" id="txtNombre2"><br>
              </div>
              <div class="grid-item">
                <label for="txtApellido2">Apellido</label>
                <input type="text" class="form-control" name="txtApellido2" id="txtApellido2"><br>
              </div>
              <div class="grid-item">
                <label for="txtEmail2">Email</label>
                <input type="text" class="form-control" name="txtEmail2" id="txtEmail2"> <br>
              </div>
              <div class="grid-item">
                <label for="txtCV2">CV Link:</label>
                <input type="text" class="form-control" name="txtCV2" id="txtCV2"> <br>
              </div>
            
              <input type="checkbox" name="puesto" id="txtPuesto" value="${item.puesto}" style="display: none;" checked>
              <div id="button-aplicar">
                <button type="button" class="btn" onclick="guardar2()">Aplicar</button>
              </div>
              </form>
          </div>
        </article>
      `;
      document.getElementById("s5").innerHTML = fc;
    }
  }
}
function salir(id){
    const etiqueta = document.getElementById(id);
  if (etiqueta) {
    // si la etiqueta existe, la eliminamos del DOM
    etiqueta.parentNode.removeChild(etiqueta);
  }
}

function guardar2() {

    let nombre2 = document.getElementById("txtNombre2").value
    let apellido2 = document.getElementById("txtApellido2").value
    let email2 = document.getElementById("txtEmail2").value
    let cv2 = document.getElementById("txtCV2").value
    let puesto = document.getElementById("txtPuesto").value
    
    if (nombre2 === '' || apellido2 === '' || email2 === '' || cv2 === '') {

        alert("Complete los campos requeridos")
    }else{
    let postulantes = {
        nombre: nombre2,
        apellido: apellido2,
        email: email2,
        cv: cv2,
        puesto: puesto,
        estado: 0,
        anotaciones: ""
    }
    let url = "http://lpagani2003.pythonanywhere.com/postulantes"
    var options = {
        body: JSON.stringify(postulantes),
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
  }