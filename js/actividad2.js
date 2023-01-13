function afegirText() {
  const miTxt = "¡Hola Mundo!";
  const miParrafo = document.createElement("p");
  miParrafo.textContent = ` ${miTxt}`;
  document.getElementById("contenido").appendChild(miParrafo);
}

function alinearIzquierda() {
    document.getElementById("contenido").style.textAlign = "left";
}
function alinearCentro() {
    document.getElementById("contenido").style.textAlign = "center";
}
function alinearDerecha() { 
    document.getElementById("contenido").style.textAlign = "right";
}

function cambiarColor() {
    document.getElementById("contenido").style.color = "red";
}

function cambiarFondo() {
    document.getElementById("contenido").style.backgroundColor = "yellow";
}

function cambiarTamano() {
    document.getElementById("contenido").style.fontSize = "20px";
}

function cambiarTipoLetra() {
    document.getElementById("contenido").style.fontFamily = "Arial";
}