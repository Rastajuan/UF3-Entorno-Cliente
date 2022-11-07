//Creamos un addEventListener para el evento submit del formulario que llama a la función comprobarFormulario. La función se ejecuta cuando se envía el formulario.
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", comprobarFormulario);
});

function comprobarFormulario(_evento) {
  //Asignamos a variables los valores del los campos del formulario a testear mediante su id con el método getElementById y su valor con el método value
  var nombre = document.getElementById("nombre").value;
  var horario = document.getElementById("horario").value;
  var check = document.getElementById("check").checked;

  //Comprobamos el valor de los campos mediante un bucle if: que el nombre no esté vacío, que el horario tenga uno de los dos valores válidos y que el checkbox esté marcado y avisamos al usuario mediante un alert en caso de que no se cumpla alguna de las condiciones. En caso de que se cumplan todas las condiciones, se muestra un mensaje de éxito.
  if (nombre == "") {
    alert("Debe introducir un nombre");
    return;
  }
  if (horario !== "Mañana" && horario !== "Tarde") {
    alert("Debe introducir un horario");
    return;
  }
  if (!check) {
    alert("Debe aceptar las normas de registro");
    return;
  }

  alert("Formulario enviado");
  this.submit();
}
