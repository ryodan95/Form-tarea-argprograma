function enviarEstado() {
    let estadoSeleccionado = document.getElementById("estado").value;

    let estadoSeleccionadoElement = document.getElementById("estadoSeleccionado");
    estadoSeleccionadoElement.innerHTML = "Estado seleccionado: " + estadoSeleccionado;
}