function renderProductos() {
    const producto = cargarProducto();
    let htmlImagenProducto = `<img src="img/${producto.imagen}" class="img-fluid" alt=${producto.nombre} />`;
    let htmlDetalleProducto = `<h1>${producto.nombre}</h1>
    <p>$${producto.precio}</p>
    <p><b>IMPERDIBLE</b></p>
    <p>${producto.descripcion}</p>
    <p class="card-text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>`;
    document.getElementById("imagenProducto").innerHTML = htmlImagenProducto;
    document.getElementById("detalleProducto").innerHTML = htmlDetalleProducto;
    console.log(producto);
}
renderProductos();
renderBotonCarrito();
