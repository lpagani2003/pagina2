const activarFuncion = document.querySelector("#activarFuncion");
const subtotalProceso = document.querySelector("#subtotalProceso");
const ivaProceso = document.querySelector("#ivaProceso");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector("#procesar-pago");

let prod;
var carrito = [];


function loadJson() {
    fetch('/templates/js/data/prodList.json')
        .then(response => response.json())
        .then(data => {
            prod = data;
            prod.map(p => {
            });
        })
        .catch(err => "Error" + err.message)
}

loadJson();
if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
};
if (formulario) {
    formulario.addEventListener("submit", enviarPedido);
};
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    mostrarCarrito();
    if (activarFuncion) {
        document.querySelector("#activarFuncion").click(procesarPedido);
    }

});
function vaciarCarrito() {
    carrito.length = []
    mostrarCarrito()
};
function continuarCompra() {
    if (carrito.length === 0) {
        // agregar alerta
    } else {
        location.href = "/templates/shop-html/payPage.html"
        procesarPedido()
    }
};
function agregarProducto(id) {
    const existe = carrito.some(prod => prod.id === id)
    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = prod.find((p) => p.id === id);
        carrito.push(item);
    }
    mostrarCarrito();
};
const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal-body')
    if (modalBody) {
        modalBody.innerHTML = `
            <tr id="first-row">
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>`
        carrito.forEach((prod) => {
            const { id, name, type, price, image, cantidad } = prod
            modalBody.innerHTML += `
            <tr>
                <th class="producto">
                    <div class="img-carrito1">
                        <img class="img-carrito" src="${image}" />
                    </div>
                    <div class="info-producto">
                        <p>${type} <br> ${name}</p>

                        <a href="" onclick="eliminarProducto(event,${id})">Quitar</a>
                    </div>
                </th>
                <th class="numeros">
                    <p> ${cantidad}</p>
                </th>
                <th class="numeros">
                    <p>$ ${price * cantidad}</p>
                </th>
            </tr>
            `
        })
    }
    if (carrito.length === 0) {
        modalBody.innerHTML = `
        <p class="no-hay-nada">Aun no hay nada</p>`
    }
    var precioTotal = document.querySelector("#precioTotal")
    if (precioTotal) {
        precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
    }
    guardarStorage()
};
function eliminarProducto(event, id) {
    event.preventDefault();
    const productoId = id;
    carrito = carrito.filter((producto) => producto.id !== productoId);
    mostrarCarrito();
  };
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
};
function procesarPedido() {
    carrito.forEach((prod) => {
        const listaCompra = document.querySelector('#tbody')
        const {name, type, price, image, cantidad } = prod
        const row = document.createElement('tr')
        row.innerHTML += `
                <td class="producto">
                    <div class="producto-info">
                        <img src="${image}" alt="">
                        <div>
                            <p>${type}<br>${name}</p>
                            <small>precio: $${price}</small>
                            <br>
                        </div>
                    </div>
                </td>
                <td class="cantidad">${cantidad}</td>
                <td class="subtotal">$${price * cantidad}</td>
        `
        listaCompra.appendChild(row)
    })
    var iva = carrito.reduce((acc, prod) => ((acc + prod.cantidad * prod.price) * 21 / 100), 0).toFixed(2);
    var subtotal = carrito.reduce((acc, prod) => (acc + prod.cantidad * prod.price), 0).toFixed(2);
    subtotalProceso.innerText = subtotal;
    ivaProceso.innerText = iva;
    totalProceso.innerText = (subtotal - (-iva)).toFixed(2);
};
function togglePopup(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};
function enviarPedido(e) {
    e.preventDefault()
    const cliente = document.querySelector("#persona").value
    const correo = document.querySelector("#correo").value

    if (correo === '' || cliente === '') {
        // alerta
    } else {
        let messageInput = document.querySelector("#message");
        let mensaje = "Mi pedido:\n";
        carrito.forEach((prod) => {
            const { name, type, price, cantidad } = prod;
            mensaje += `Producto : ${type} | ${name}\n
            Precio : ${price}\n
            Cantidad: ${cantidad}\n
            Precio subtotal: ${price * cantidad}\n
            ---------------------------------------------\n`;
        });
        mensaje += `Subtotal: $${subtotalProceso.textContent}\n
                    IVA: $${ivaProceso.textContent}\n
                    Total: $${totalProceso.textContent}\n\n
                    Datos del cliente:\n
                    Nombre: ${cliente}\n
                    Correo: ${correo}\n`;
        console.log(mensaje)
        messageInput.value = mensaje;

        const btn = document.getElementById('button');



        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_iswgbnc';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Finalizar compra';
                alert('Enviado!');
            }, (err) => {
                btn.value = 'Finalizar compra';
                alert(JSON.stringify(err));
            });
    };

    console.log("pasaste");

    setTimeout(() => {
        formulario.reset()
    }, 3000)

    alert("Compra realizada correctamente")
    setTimeout(() => {
        
        location.href = "/templates/shop.html"
        localStorage.removeItem("carrito");
        carrito = [];
        mostrarCarrito();
        
    }, 3000)
    
}



