$(document).ready(function () {
  $("#agregarLinea").click(function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace

    // Obtener los valores de los campos de entrada
    const producto = $("#producto").val();
    const cantidad = $("#cantidad").val();
    const precioUnitario = $("#precio-unitario").val();
    const descuento = $("#descuento").val();

    // Crear una nueva fila con los valores obtenidos y el botón
    const nuevaFila = `<tr>
                            <td>${producto}</td>
                            <td>${cantidad}</td>
                            <td>${precioUnitario}</td>
                            <td>${descuento}</td>
                            <td><a href="#" class="btn btn-danger eliminarLinea">Eliminar</a></td>
                        </tr>`;

    // Agregar la nueva fila al final de la tabla
    $("#cuerpo-tabla").append(nuevaFila);

    // Limpiar los campos después de agregar la fila
    $("#producto").val("");
    $("#cantidad").val("");
    $("#precio-unitario").val("");
    $("#descuento").val("");
  });

  // Función para eliminar la fila al hacer clic en el botón "Eliminar"
  $("#cuerpo-tabla").on("click", ".eliminarLinea", function (event) {
    event.preventDefault();
    $(this).closest("tr").remove();
  });
});
