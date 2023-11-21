// Accedemos a cada elemento por su id y lo almacenamos en variables

// Usando JAVASCRIPT
let cuerpoTabla = document.getElementById("cuerpo-tabla");
let producto = document.getElementById("producto");
let cantidad = document.getElementById("cantidad");
let precioUnitario = document.getElementById("precio-unitario");
let descuento = document.getElementById("descuento");
let agregarLinea = document.getElementById("agregarLinea");

// Usando JQUERY
$(document).ready(function () {
  let cuerpoTabla = $("#cuerpo-tabla");
  let producto = $("#producto");
  let cantidad = $("#cantidad");
  let precioUnitario = $("#precio-unitario");
  let descuento = $("#descuento");
  let agregarLinea = $("#agregarLinea");
});
