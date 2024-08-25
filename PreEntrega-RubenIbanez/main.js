function renderProductos() { //Recorre el array(constant) de producto y lo que hacer nutrir al html que generamos abajo con toda esa informacion
    let contenidoHTML = "";

    for (const producto of productos) {
        contenidoHTML += ` <div class="col-md-3 img-fluid ">
            <div class="card border-0 ">
                <a href="producto.html" onclick="guardarProducto(${producto.id})";>
                    <img src="images/${producto.imagen}" class= "card-img-top" height="250"  alt="${producto.nombre}">
                </a>
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio}</span></p>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("contenido").innerHTML = contenidoHTML; //innerhtml nutrimos con el array y el html
}

renderProductos();
renderBotonCarrito();


