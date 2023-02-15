cad = `

<nav role='cartshop'>
  <div id="menuToggle1">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu1">
      <div id="scrol">
        <table  class="modal-body">
        
        
       </table>
      </div>
      <h6>*total sin impuestos argenitinos</h6>
      <div id="total">
        <h1 id="ptotal">Precio total*: $</h1>
        <h1 id="precioTotal"></h1>
      </div>
      <div id="buttons">
      <button id="vaciarCarrito" onclick="vaciarCarrito()">Vaciar</button>
      <button id="continuarCompra" onclick="continuarCompra()">Continuar compra</button>
    </div>
    </ul>
  </div>
</nav>
<link rel="stylesheet" href="/templates/CSS/apps/navcarshop.css">`
document.write(cad)