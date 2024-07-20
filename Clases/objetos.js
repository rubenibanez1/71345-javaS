//*Objetos



/* //Agrupar un grupo de informacion bajo una unica estructura
const persona = {nombre:"Manuel", apellido:"Rodriguez", ci:47617046, direccion:"el violin de becho 2974", ciudad:"Montevideo", pais:"Uruguay", casado:false};
console.log(persona);

//Accediendo a los valores
console.log(persona.apellido + ", " + persona.nombre);



function estasCasado(valor) {
    if (valor == true) {
        console.log("Está casado!")
    } else {
        console.log("Esta soltero!");
    }
} 
estasCasado(persona.casado);

const pizzas = {id:1, nombre:"pizza con muzarella", precio:"400"}; 
console.log(pizzas.id + " $" + pizzas.precio) 
 */

////////////!!!!!!!

//?MODIFICANDO VALORES DE UN OBJETO
/* const bebida = {id:1 , nombre:"coca cola", precio:"170"};
console.log(brbidas);
bebida.precio=185; //opcion 1
bebida["nombre"] = "coca cola 2l" //opcion 2
console.log(bebida); */

//?oBJETO CONSTRUCTOR *****************************************
/* function persona(dato1, dato2, dato3) {
    if (dato1 == "" || undefined) {
        this.nombre = "[SIN NOMBRE]";
    } else {
        this.nombre = dato1;
    }
    if (dato2 == "" || undefined) {
        this.nombre = "[SIN NOMBRE]";
    } else {
        this.seguidores= dato2;
    }
    if (dato3 == "" || undefined) {
        this.nombre = 0;
    } else {
        this.seguidores= dato3;
    }
}


function persona(dato1, dato2, dato3) { //esto le da el orden a lo de abajo
    this.nombre = dato1;
    this.edad = dato2;
    this.calle = dato3;
}

const usuario1 = new persona("Homero", "39", "Camino Carrasco 2787"); //esto trabaja con la funcion de arriba
const usuario2 = new persona("Andres", "36", "Camino Carrasco 2757");
console.log(usuario1);
console.log(usuario2); */


//?Crear un constructor a partir de un objeto //construir una estructura de informacion 
/* const pizzas = {id:1, nombre:"pizzas con muzarella", precio:400};

function crearPromo(objeto) { //this es el objeto que esta creando
    this.idProducto = objeto.id; //nombre de la propiedad
    this.nombreProducto = objeto.nombre.toUpperCase();//nombre de la propiedad
    this.preciosSinIva = objeto.precio;//nombre de la propiedad
    this.precioConIva = this.preciosSinIva * 1.22;//nombre de la propiedad
}

const pizzas1= new crearPromo(pizzas);
const pizzas2= new crearPromo({id:2, nombre:"pizzas cuatro quesos", precio:400});
console.log(pizzas1);
console.log(pizzas2);
pizzas1.descripcion = "350g de muzzarella";
console.log(pizzas1) */

//?Método <> FUNCIONES
/* let texto = prompt("Ingrese su Nombre: ")
console.log(texto);
console.log(text.trim()); //accede al metodo toUppercase()

function formatearTexto(texto) {
    return text.trim().toUpperCase();
} */


//? METODOS PERSONALIZADOS
/* function persona(dato1, dato2, dato3) { //esto le da el orden a lo de abajo
    this.nombre = dato1;
    this.edad = dato2;
    this.calle = dato3;
    this.saludar = () => { 
        console.log("Hola soy " + this.nombre)}
}

const usuario1 = new persona("Homero", "39", "Camino Carrasco 2787"); //esto trabaja con la funcion de arriba
/* const usuario2 = new persona("Andres", "36", "Camino Carrasco 2757"); */
/* persona1.saludar(); */
/* persona2.saludar (); */

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! cLASES **********************
//?Crear una clase persona(Defino las propiedades de la clase que serian las variables)
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
    pasarAMayuscula = () => {
        this.nombre = this.nombre.toUpperCase();
    }
}
const persona1 = new Persona("Gabriel", 25, "malvin 4527")
console.log(persona1);
persona1.saludar();
persona1.pasarAMayuscula();
console.log(persona1);