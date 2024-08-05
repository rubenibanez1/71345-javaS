function renderCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenidoHtml = `<table class="table">
    <tbody>`;


    for (const producto of carrito) {
        contenidoHtml += ` <tr>
        <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="100" height="100" ></td>
        <td>${producto.nombre}</td>
        <td><span class="text-danger">$${producto.precio} UYU </span></td>
        <td><button>ELIMINAR [-]</td>
        </tr>`;
    }

    contenidoHtml += `</tbody>
    </table>`;

    document.getElementById("contenido").innerHTML = contenidoHtml;
}
renderCarrito();