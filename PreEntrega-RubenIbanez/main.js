//ARRAYS
const Pizzas = [
    {id:1, nombre:"Pizza con muzzarella, precio:1800"},
    {id:2, nombre:"Pizza con jamón y queso, precio:1800"},
    {id:3, nombre:"Pizza la inolvidable(a elección gustos), precio:1800"},
]; // MI CATALOGO ORIGINAL


//!  ******       ALTA Y BAJA DE PRODUCTOS    *********
class Productos {
    constructor(productos) { //VARIABLE
        this.items = productos;
    }

    agregarProducto(nombreP, precioP) { //METODO
        const producto = {id:this.generarId(), nombre:nombreP, precio:precioP}; //CREAR NUEVO OBJETO PRODUCTO
        this.items.push(producto);
        console.log("Producto agregado!")
    }

    buscarProducto(id) { //METODO
        return this.items.find(item => item.id == id) //find devuelve el primer elemento que coincida
    }   //return me da el detalle completo 

    obtenerProductos() { //METODO
        return this.items;
    }

    listarProductos(){
        let salida = "";

        for (const producto of this.items) {
            salida += '${producto.id} + ${producto.nombre} + ${producto.precio}\n';    //+= me mantiene el valor anterior y el de ahora
        }
        alert(salida)
    }

    TotalProductos() {
        return this.items.length;
    }
    /* generarId() { //SIRVE ESTE METODO SIEMPRE Y CUANDO NO SE ELIMINEN PRODUCTOS
        return this.items.length + 1; //CANTIDAD DE PRODUCTO DE MI ARRAY MAS 1
        
    } */
    generarId(){
        let max = 0;

        this.items.forEach(item => {
            if(item.id > max) {
                max = item.id;
            }
        });

        return max + 1; 
    }

    eliminarProducto(id) {
        //let pos = this.items.findIndex(item => item.id == id); //Busque la posicion del elemento a eliminar en el array
        /* //1 - Eliminar con metodo splice
        this.items.splice(pos, 1); //elimino el elemnto en la posicion "pos"
        console.log("Se elimino el producto #" + id); */

        //2 - Eliminar con metodo filter - 
        this.items = this.items.filter(item => item.id != id); //eliminar el elemnto de la posicion "pos"
        console.log("Se eliminó el producto: #" + id);
    }
}


//! SE CREA UNA NUEVA CLASE PRODUCTO
const catalogo = new Productos (Pizzas)



let nombreProducto = prompt("Ingresar el nombre el producto:");
let precioProducto = parseFloat(prompt("Ingresar el precio del producto:"));
catalogo.agregarProducto(nombreProducto, precioProducto);
console.log(catalogo.obtenerProductos());
console.log(catalogo.eliminarProducto(2));
console.log(catalogo.obtenerProductos());

//Listar los productos
catalogo.listarProductos();

//PARA SABER CUANTOS PRODUCTOS TENGO EN MI CATALOGO
console.log ("Total producto: " + catalogo.TotalProductos());