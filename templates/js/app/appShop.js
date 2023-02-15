function toggleVisibility(checkbox, elements) {
    elements.forEach(element => {
        element.style.display = checkbox.checked ? "block" : "none";
    });
}

function filtro() {
    const checkBoxzp = document.getElementById("czp");
    const checkBoxbz = document.getElementById("cbz");
    const checkBoxcm = document.getElementById("ccm");
    const checkBoxgr = document.getElementById("cgr");
    const checkBoxot = document.getElementById("cot");
    const checkBoxccmp = document.getElementById("ccmp");
    const divs = {
        zp: document.querySelectorAll(".zp"),
        gr: document.querySelectorAll(".gr"),
        bz: document.querySelectorAll(".bz"),
        cm: document.querySelectorAll(".cm"),
        ot: document.querySelectorAll(".ot"),
        cmp: document.querySelectorAll(".cmp"),
    };

    checkBoxzp.addEventListener("change", () => toggleVisibility(checkBoxzp, divs.zp));
    checkBoxbz.addEventListener("change", () => toggleVisibility(checkBoxbz, divs.bz));
    checkBoxcm.addEventListener("change", () => toggleVisibility(checkBoxcm, divs.cm));
    checkBoxgr.addEventListener("change", () => toggleVisibility(checkBoxgr, divs.gr));
    checkBoxot.addEventListener("change", () => toggleVisibility(checkBoxot, divs.ot));
    checkBoxccmp.addEventListener("change", () => toggleVisibility(checkBoxccmp, divs.cmp));
}

  let url = "/templates/js/data/prodList.json"
  var datos = [];
  
  fetch(url)
      .then(response => response.json())
      .then(data => {  // data contiene el JSON
        //   console.log(data)
          datos = data.arreglo
        //   console.log(datos)   
  
let cad = `
       `
for (producto of data) {
    cad += `<div class="tarjeta ${producto.idt}" style="display: none;">
            <img id="image" src="${producto.image}" alt="${producto.name}">
            <div class="cuerpo">
                <h4 id="p1">${producto.type} - ${producto.name}</h4>
                <p class="precio" id="p1">Precio:<span>$ ${producto.price}</span></p>
                <a href="${producto.link}"><h5 id="p1">Ver más</h5></a>
                <button class="btn" onclick="agregarProducto(${producto.id})">Agregar al carrito</button>
            </div>
        </div>
    `
}
document.getElementById("tarjetas").innerHTML = cad;

      });






