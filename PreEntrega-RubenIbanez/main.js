//?Método <> FUNCIONES
let texto = prompt("Ingrese su Nombre: ")//le pido su nombre

function formatearTexto(texto) {
    return text.trim().toUpperCase(); //me saca los espacios y me lo pone en mayscula
}
alert("Bienvenido/a " + " " + texto + ", " + "un gusto saludarte!!");


//!Crear una clase persona(Defino las propiedades de la clase que serian las variables)
class Persona {
    constructor(dato1, dato2, dato3){
    this.nombre = dato1;
    this.edad = dato2;
    this.calle = dato3;
    }
    //?Defino los metodos de la clase(que serian funciones)
    saludar = () => { 
        console.log("Hola soy " + this.nombre)
    }
    pasarMayus = () => {
        this.nombre = this.nombre.toUpperCase();
    }
}
const persona1 = new Persona("Gabriel", 25, "malvin 4527")
console.log(persona1);
persona1.saludar();


//?     ARRAY - 
//!Definir una ARRAY
const gustos = ["Pizza con muzzarella", "Pizza con chedar", "Pizza completa para dos"];


gustos.push("Pizza a la napolitana");//ver si funciona
console.log(gustos);//er si funciona

let bebida1 = { id:1, nombre:"Coca-cola", Precio:250};
const bebidas = [bebida1, {id:2, nombre: "pepsi", precio:275}];
bebidas.push({id:3, nombre:"Spray", precio:169});
console.log(bebidas);

//?Crear un constructor a partir de un objeto //construir una estructura de informacion 
const pizzas = {id:1, nombre:"pizzas con muzarella", precio:400};

function crearPromo(objeto) { //this es el objeto que esta creando
    this.idProducto = objeto.id; //nombre de la propiedad
    this.nombreProducto = objeto.nombre.toUpperCase();//nombre de la propiedad
    this.preciosSinIva = objeto.precio;//nombre de la propiedad
    this.precioConIva = this.preciosSinIva * 1.22;//nombre de la propiedad
}

const pizzas1= new crearPromo(pizzas);
const pizzas2= new crearPromo({id:2, nombre:"pizzas cuatro quesos", precio:400}); //Agrego un objeto
console.log(pizzas1);
console.log(pizzas2);


//-------------------------------------------
const gusto = [
    {id:1, nombre: "pizza con muzza", precio: 240},
    {id:2, nombre: "pizza con chedar", precio: 320},
    {id:3 ,nombre: "pizza con 5 gustos a elección", precio: 380},
]
const gustoIVA = gusto.map(item =>({idgustos:item.id, nombregusto:item.nombre.toUpperCase(), preciogusto:item.precio * 1.21})); //paso el nombre a mayuscula tabién
console.log(gustoIVA);