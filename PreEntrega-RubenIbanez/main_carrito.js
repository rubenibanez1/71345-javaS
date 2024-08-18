function renderCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenidoHtml = `<table class="table">
    <tbody>`;


    for (const producto of carrito) {
        contenidoHtml += ` <tr>
        <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="50" height="50" ></td>
        <td class="align midlle">${producto.nombre}</td>
        <td class="text-center align-middle"><span class="text-danger">$${producto.precio} UYU </span></td>
        <td class="text-end aling-middle"><button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button></td>
        </tr>`;
    }

    contenidoHtml += `</tbody>
    </table>`;
    document.getElementById("contenido").innerHTML = contenidoHtml;
}
renderCarrito();