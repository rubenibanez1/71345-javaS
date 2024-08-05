const productos = [
    { id: 1, nombre: "pizza con muzzarella", precio: "240", imagen: "../img/pizzaConMuzza.jpg" },
    { id: 2, nombre: "pizza con chedar", precio: "370", imagen: "../img/pizza con muzza,panceta y queso chedar.avif" },
    { id: 3, nombre: "pizza con cebolla y chedar", precio: "390", imagen: "../img/pizzaConMuzza.jpg" },
    { id: 4, nombre: "pizza con a la napolitana", precio: "580", imagen: "../img/Imagen de pizza.jpg" }
]

function renderProductos(productos) {
    let contenidoHtml = "";

    for (const producto of productos) {
        contenidoHtml += ` <div class="col-md-3 img-fluid">
        <div class="card border-0 ">
            <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio}</span></p>
                </div>
        </div>
        </div>`;
    }
    document.getElementById("contenido").innerHTML = contenidoHtml;
}

renderProductos(productos);