const valor = document.getElementById("selector").value;
const tag = parseInt(valor);
let fc = "";
let productos;

async function loadJson() {
    try {
        const response = await fetch("/templates/js/data/prodList.json");
        productos = await response.json();
        console.log(productos);
    } catch (err) {
        console.error("Error:", err.message);
        return;
    }

    const item = productos.find(p => p.id === tag);
    if (item) {
        console.log("item:", item.name);
        fc = `
        <div class="grid-container">
        <div class="grid-item" id="dviewer">
            
            <link rel="stylesheet" href="/templates/CSS/apps/3d.css">
            <!-- use unique asset to ensure lazy loading -->
            <model-viewer id="lazy-load" camera-controls touch-action="pan-y" reveal="manual" src="${item.model3d}">    
                <div id="button-load" slot="poster">Load 3D Model</div>
            </model-viewer>
            
            <!-- src=https://modelviewer.dev/examples/loading/#customizeLoad source code -->
        </div>
        <div class="grid-item" id="info">
            <h1>$${item.price}</h1>
            <h2>${item.type} <br>${item.name}</h2>
            <button class="btn" onclick="agregarProducto(${item.id})">Agregar al carrito</button>
        </div>
    </div>
        `
        document.getElementById("s1").innerHTML = fc;
        
        // Comprueba si existe el elemento button-load antes de suscribir el evento
        const buttonLoad = document.querySelector('#button-load');
        if (buttonLoad) {
            buttonLoad.addEventListener('click', () => document.querySelector('#lazy-load').dismissPoster());
        }
    } else {
        alert("contacte con el administrador de la página")
    }
}
loadJson();
