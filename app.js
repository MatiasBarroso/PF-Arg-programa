var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//OCULTAR MENULUEGO DE SELECCIONAR UNA OPCION
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let sequelize = document.getElementById("sequelize");
crearBarra(sequelize);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 16, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 17, 1, intervalJavascript);
    }, 100);
    const intervalReact = setInterval(function () {
      pintarBarra(react, 16, 2, intervalReact);
    }, 100);
    const intervalNodejs = setInterval(function () {
      pintarBarra(nodejs, 14, 3, intervalNodejs);
    }, 100);
    const intervalSequelize = setInterval(function () {
      pintarBarra(sequelize, 13, 4, intervalSequelize);
    }, 100);
    const intervalIlustrator = setInterval(function () {
      pintarBarra(ilustrator, 17, 5, intervalIlustrator);
    }, 100);
  }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#59bdff";
  } else {
    clearInterval(interval);
  }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
  efectoHabilidades();
};
