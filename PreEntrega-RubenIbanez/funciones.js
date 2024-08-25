/*  Seccion producto y creacion de cartas */
const productos = [
    { id: 1, nombre: "pizza con muzzarella", precio: "240", imagen: "../img/pizzaConMuzza.jpg", descripcion: "Con 300g de pura MUZZARELLA" },
    { id: 2, nombre: "pizza con chedar", precio: "370", imagen: "../img/chedar.png" , descripcion: "Todo el gusto que necesitas en tu boca" },
    { id: 3, nombre: "pizza con cebolla y chedar", precio: "390", imagen: "../img/pizza con muzza,panceta y queso chedar.avif" , descripcion: "Sabor 100% !!"},
    { id: 4, nombre: "pizza con a la napolitana", precio: "580", imagen: "../img/napo.jpg" , descripcion: "Lo que necesitan todas las familias!"}
]

//!ESTAN TODAS LAS FUNCIONES


/* Funcion para los botones */
function agregarProducto(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarrito();
    carrito.push(producto);
    guardarCarrito (carrito);
    renderBotonCarrito();
    console.log ("El producto #" + id + "se agrego correctamente");
}

function eliminarProducto(id) {
    const carrito = cargarCarrito();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarrito (carritoActualizado);
    renderBotonCarrito();
    renderCarrito();
    console.log ("El producto #" + id + "a sido Eliminado");
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

function guardarCarrito (carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//! PARA VACIAR EL CARRITO
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    console.log("El carrito se a vaciado correctamente");
}

function cargarProducto() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);
    
    return producto;
}

function guardarProducto(id) { //Nos va a permitir entrar al producto y ver el detalle
    localStorage.setItem("producto", JSON.stringify(id));
}
