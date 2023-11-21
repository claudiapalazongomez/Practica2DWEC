/*JAVASCRIPT*/
document.addEventListener("DOMContentLoaded", function () {
  // Guardamos en una variable el elemento del botón
  let btnAgregar = document.getElementById("agregarLinea");

  // Añadimos un evento al clicar el botón
  btnAgregar.addEventListener("click", function (event) {
    event.preventDefault(); // Evitamos el comportamiento por defecto del enlace

    // Guardamos el valor introducido en cada elemento en una variable
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precioUnitario = document.getElementById("precio-unitario").value;
    let descuento = document.getElementById("descuento").value;

    // Mostramos los valores por consola
    console.log("Producto (JavaScript):", producto);
    console.log("Cantidad (JavaScript):", cantidad);
    console.log("Precio unitario (JavaScript):", precioUnitario);
    console.log("Descuento (JavaScript):", descuento);
  });
});

/*JQUERY*/
// Esperamos a que el documento se cargue antes de ejecutar el código JQuery
$(document).ready(function () {
  // Añadimos un evento al clicar el botón
  $("#agregarLinea").click(function (event) {
    event.preventDefault(); // Evitamos el comportamiento por defecto del enlace

    // Guardamos el valor introducido en cada elemento en una variable
    let producto = $("#producto").val();
    let cantidad = $("#cantidad").val();
    let precioUnitario = $("#precio-unitario").val();
    let descuento = $("#descuento").val();

    // Mostramos los valores por consola
    console.log("Producto (JQuery):", producto);
    console.log("Cantidad (JQuery):", cantidad);
    console.log("Precio unitario (JQuery):", precioUnitario);
    console.log("Descuento (JQuery):", descuento);
  });
});
