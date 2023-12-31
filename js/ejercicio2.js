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
    console.log("Producto:", producto);
    console.log("Cantidad:", cantidad);
    console.log("Precio unitario:", precioUnitario);
    console.log("Descuento:", descuento);
  });
});
