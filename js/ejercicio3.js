/*JQUERY*/
// Esperamos a que el documento se cargue antes de ejecutar el código JQuery
$(document).ready(function () {
  $("#agregarLinea").click(function (event) {
    event.preventDefault(); // Evitamos el comportamiento por defecto del enlace

    // Obtener los valores de los campos de entrada
    let producto = $("#producto").val();
    let cantidad = $("#cantidad").val();
    let precioUnitario = $("#precio-unitario").val();
    let descuento = $("#descuento").val();

    // Crear una nueva fila con los valores obtenidos y un botón que eliminará esa fila al clicar en él
    let nuevaFila = `<tr>
                            <td>${producto}</td>
                            <td>${cantidad}</td>
                            <td>${precioUnitario}</td>
                            <td>${descuento}</td>
                            <td><a href="#" class="btn btn-danger eliminarLinea">Eliminar</a></td>
                        </tr>`;

    // Agregar la nueva fila al final de la tabla
    $("#cuerpo-tabla").append(nuevaFila);

    // Limpiar los campos de los inputs después de agregar la fila
    $("#producto").val("");
    $("#cantidad").val("");
    $("#precio-unitario").val("");
    $("#descuento").val("");
  });

  // Función para eliminar la fila al hacer clic en el botón Eliminar
  $("#cuerpo-tabla").on("click", ".eliminarLinea", function (event) {
    event.preventDefault(); // Evitamos el comportamiento por defecto del enlace de nuevo
    $(this).closest("tr").remove();
  });
});
