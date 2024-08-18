/*  Seccion producto y creacion de cartas */
const productos = [
    { id: 1, nombre: "pizza con muzzarella", precio: "240", imagen: "../img/pizzaConMuzza.jpg" },
    { id: 2, nombre: "pizza con chedar", precio: "370", imagen: "../img/pizza con muzza,panceta y queso chedar.avif" },
    { id: 3, nombre: "pizza con cebolla y chedar", precio: "390", imagen: "../img/pizzaConMuzza.jpg" },
    { id: 4, nombre: "pizza con a la napolitana", precio: "580", imagen: "../img/Imagen de pizza.jpg" }
]

function renderProductos(productos) { //Recorre el array(constant) de producto y lo que hacer nutrir al html que generamos abajo con toda esa informacion
    let contenidoHtml = "";

    for (const producto of productos) {
        contenidoHtml += ` <div class="col-md-3 img-fluid ">
            <div class="card border-0">
                <img src="images/${producto.imagen}" class= "card-img-top" width="340" height="340"  alt="${producto.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio}</span></p>
                    <p class="card-text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("contenido").innerHTML = contenidoHtml; //innerhtml nutrimos con el array y el html
}

/* Funcion para los botones */
function agregarProducto(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarrito();
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("El producto se agrego correctamente");
    renderBotonCarrito();
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}


function totalProductos() {
    const carrito = cargarCarrito();
    return carrito.length; //devuelve la cantidad de elementos
}

function cargarCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

//! PARA VACIAR EL CARRITO
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}


renderProductos(productos);
renderBotonCarrito();