function renderCarrito() {
    const carrito = cargarCarrito();
    let contenidoHTML;

    if (totalProductos() > 0) {
        contenidoHTML = `<table class="table">
        <tbody>
        <tr>
        <td class="text-end" colspan="4"><button class="btn btn-danger btn-sm" onclick="vaciarCarrito();">Vaciar carrito<i class="bi bi-trash"></i></button></td>
        </tr>`;

        for (const producto of carrito) {
            contenidoHTML += ` <tr>
            <td><img src="imag/${producto.imagen}" alt="${producto.nombre}" width="50" height="50" ></td>
            <td class="align midlle">${producto.nombre}</td>
            <td class="text-center align-middle"><span class="text-danger">$${producto.precio} UYU </span></td>
            <td class="text-end aling-middle"><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id});">Eliminar <i class="bi bi-trash"></i></button></td>
            </tr>`;
        }
        contenidoHTML += `</tbody> 
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-dark my-5 text-center" role="alert">
        <h3>No se encontraron Productos en el carrito</h3>  
        </div>`
    }
    
    document.getElementById("contenido").innerHTML = contenidoHTML;
}
renderCarrito();
renderBotonCarrito();