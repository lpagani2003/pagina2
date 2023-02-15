const tag = document.getElementById("selector").value
var fc=` 
`
let cars;

async function loadJson() {
  try {
    const response = await fetch("/templates/js/data/dataspec.json");
    cars = await response.json();
  } catch (err) {
    console.error("Error:", err.message);
  }

  const item = cars.find(c => c.id === tag);
  if (item) {
    console.log("Marca:", item.linea);
    fc += `
    <table>
    <tr>
     <td>Linea</td>
     <td>${item.linea}</td>
 </tr>
 <tr>
     <td>Modelo</td>
     <td>${item.nombre}</td>
 </tr>
 <tr>
     <td>Tipo de carroceria</td>
     <td>${item.tipo_de_carroceria}</td>
 </tr>
 <tr>
     <td>Chasis</td>
     <td>${item.chasis}</td>
 </tr>
 <tr>
     <th>Motor</th>
     <th></th>
 </tr>
 <tr>
     <td>Nro. de cilindros</td>
     <td>${item.n_de_cilindros}</td>
 </tr>
 <tr>
     <td>Nro. de valvulas por cilindro</td>
     <td>${item.n_de_valvulas_por_cilindro}</td>
 </tr>
 <tr>
     <td>Relación de compresión</td>
     <td>${item.relacion_de_compresion}</td>
 </tr>
 <tr>
     <td>Cilindrada</td>
     <td>${item.cilindrada}</td>
 </tr>
 <tr>
     <td>Potencia Máxima</td>
     <td>${item.potencia}</td>
 </tr>
 <tr>
     <td>Torque Máximo</td>
     <td>${item.torque}</td>
 </tr>
 <tr>
     <td>Emisiones</td>
     <td>${item.emisiones}</td>
 </tr>
 <tr>
     <th>Distribución</th>
     <th></th>
 </tr>
 <tr>
     <td>Comando</td>
     <td>${item.comando}</td>
 </tr>
 <tr>
     <td>Árbol de levas</td>
     <td>${item.arbol_de_levas}</td>
 </tr>
 <tr>
     <th>Alimentación</th>
     <th></th>
 </tr>
 <tr>
     <td>Sobrealimentación</td>
     <td>${item.sobrealimentacion}</td>
 </tr>
 <tr>
     <td>Sistema de combustible</td>
     <td>${item.sistema_combustible}</td>
 </tr>
 <tr>
     <td>Sistema de ignición</td>
     <td>${item.Ignicion}</td>
 </tr>
 <tr>
     <td>Combustible</td>
     <td>${item.combustible}</td>
 </tr>
 <tr>
     <th>Dirección</th>
     <th></th>
 </tr>
 <tr>
     <td>Caja de dirección</td>
     <td>${item.caja_de_direccion}</td>
 </tr>
 <tr>
     <td>Diametro de giro</td>
     <td>${item.diametro_min_giro}</td>
 </tr>
 <tr>
     <th>Frenos</th>
     <th></th>
 </tr>
 <tr>
     <td>Sistema de frenos</td>
     <td>${item.F_sistema}</td>
 </tr>
 <tr>
     <td>Frenos delanteros</td>
     <td>${item.F_delanteros}</td>
 </tr>
 <tr>
     <td>Frenos traseros</td>
     <td>${item.F_traseros}</td>
 </tr>
 <tr>
     <th>Suspenciones</th>
     <th></th>
 </tr>
 <tr>
     <td>Suspención delantera</td>
     <td>${item.S_delantera}</td>
 </tr>
 <tr>
     <td>Suspensión trasera</td>
     <td>${item.S_trasera}</td>
 </tr>
 <tr>
     <th>Transmisión</th>
     <th></th>
 </tr>
 <tr>
     <td>Tracción</td>
     <td>${item.traccion}</td>
 </tr>
 <tr>
     <td>Caja de cambios</td>
     <td>${item.caja_de_cambios}</td>
 </tr>
 <tr>
     <td>realiones de cambios 1°</td>
     <td>${item.pri}</td>
 </tr>
 <tr>
     <td>2°</td>
     <td>${item.seg}</td>
 </tr>
 <tr>
     <td>3°</td>
     <td>${item.ter}</td>
 </tr>
 <tr>
     <td>4°</td>
     <td>${item.cuar}</td>
 </tr>
 <tr>
     <td>5°</td>
     <td>${item.quin}</td>
 </tr>
 <tr>
     <td>6°</td>
     <td>${item.sex}</td>
 </tr>
 <tr>
     <td>7°</td>
     <td>${item.sep}</td>
 </tr>
 <tr>
     <td>8°</td>
     <td>${item.oct}</td>
 </tr>
 <tr>
     <td>9°</td>
     <td>${item.nov}</td>
 </tr>
 <tr>
     <td>R</td>
     <td>${item.R}</td>
 </tr>
 <tr>
     <td>Relación del diferencial</td>
     <td>${item.R_diferencial}</td>
 </tr>
 <tr>
     <th>Neumáticos</th>
     <th>${item.neu_dim}</th>
 </tr>
 <tr>
     <th>Pesos y capacidades</th>
     <th></th>
 </tr>
 <tr>
     <td>Capadidad del tanque de combustible</td>
     <td>${item.tan_comb}</td>
 </tr>
 <tr>
     <td>Peso en orden de marcha</td>
     <td>${item.tara}</td>
 </tr>
 <tr>
     <td>Capacidad de carga</td>
     <td>${item.carga}</td>
 </tr>
 <tr>
     <td>Capacidad de carga remolcable - sin frenos</td>
     <td>${item.carga_remolque}</td>
 </tr>
 <tr>
     <th>Dimensiones</th>
     <th></th>
 </tr>
 <tr>
     <td>Batalla</td>
     <td>${item.batalla}</td>
 </tr>
 <tr>
     <td>Longitud del vehículo</td>
     <td>${item.l}</td>
 </tr>
 <tr>
     <td>Ancho del vehículo</td>
     <td>${item.w}</td>
 </tr>
 <tr>
     <td>Altura del vehículo</td>
     <td>${item.h}</td>
 </tr>
 <tr>
     <td>Despeje</td>
     <td>${item.hf}</td>
 </tr>
 <tr>
     <td>Volumen del baul</td>
     <td>${item.baul}</td>
 </tr>
 <tr>
     <th>Prestaciones</th>
     <th></th>
 </tr>
 <tr>
     <td>Velocidad máxima</td>
     <td>${item.vmax}</td>
 </tr>
 <tr>
     <td>Aceleración 0 a 100 km/h </td>
     <td>${item.acc}</td>
 </tr>
 </table>
 `
 document.getElementById("tarjetas").innerHTML = fc;
  } else {
    console.log("No se encontró un item con id:", tag);
  }
}

loadJson();

