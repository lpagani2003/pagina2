const elements = document.querySelectorAll('section');

  // Función para ocultar o mostrar los elementos según el ancho de la pantalla
  const toggleElementsVisibility = () => {
    // Obtiene el ancho de la pantalla
    const screenWidth = window.innerWidth;

    // Si la pantalla es menor que cierto ancho, oculta todos los elementos
    if (screenWidth < 610) {
      elements.forEach(element => {
        element.classList.add('hide');
      });
    } else {
      // Si la pantalla es mayor o igual que cierto ancho, muestra todos los elementos
      elements.forEach(element => {
        element.classList.remove('hide');
      });
    }
  };

  // Llama a la función al cargar la página y cada vez que se redimensione la pantalla
  toggleElementsVisibility();
  window.addEventListener('resize', toggleElementsVisibility);



function before() {
  var radio = document.getElementById("ppa");
  var div1 = document.getElementById("s2");
  var div2 = document.getElementById("s3");
  var div3 = document.getElementById("s4");
  var div4 = document.getElementById("s5");
  if (radio.checked == true) {
    div1.style.display = "block";
    div2.style.display = "block";
    div3.style.display = "none";
    div4.style.display = "block";
  } else {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    div4.style.display = "none";
  }
}
function after() {
  var radio = document.getElementById("op");
  var div1 = document.getElementById("s2");
  var div2 = document.getElementById("s3");
  var div3 = document.getElementById("s4");
  var div4 = document.getElementById("s5");
  if (radio.checked == true) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    div4.style.display = "none";
  } else {
    div1.style.display = "block";
    div2.style.display = "block";
    div3.style.display = "none";
    div4.style.display = "block";
  }
}
function AC() {
  var checkBox = document.getElementById("acp");
  var div = document.getElementById("ac");
  if (checkBox.checked == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function AM() {
  var checkBox = document.getElementById("amp");
  var div = document.getElementById("am");
  if (checkBox.checked == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function AD() {
  var checkBox = document.getElementById("adp");
  var div = document.getElementById("ad");
  if (checkBox.checked == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function AID() {
  var checkBox = document.getElementById("aidp");
  var div = document.getElementById("aid");
  if (checkBox.checked == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function togglePopup(id) {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function togglePopdown(id) {
  const element = document.getElementById(id);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
