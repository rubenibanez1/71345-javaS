//---------------------------- CLASE 1 -  Conceptos generales: Sintaxis y variables -----------------//
//comentario
//alert("Hola mundo");

// declarando variables
//let nombre = "Ruben"; //declaro la variable nombre, asignando el valor Ruben a la variable nombre 
//const apellido = "Ibañez";
//alert(nombre); // permite mostrar una alerta en la pantalla
//alert(apellido);
//console.log(nombre); //otra forma de imprimir la variable
// operaciones basicas (numericas)
/* let numeroA = 10;
let numeroB = 5;
const numeroC = 30; */
//SUMA
/* let resultado = numeroA + numeroB;
alert(resultado); */
//resta
/* let resultado = numeroA - numeroB;
alert(resultado); */
//Prompts, Alert y console
/* let nombreIngresado = prompt("Ingrese su nombre y apellido"); //no se puede modificar el como se ve porque depende del sistema operativo
let mensaje = "Hola, " + nombreIngresado + "!!!";
alert(mensaje);
console.log(mensaje); */

//Ejemplo de entrada y salida  con prompts
/* let nombreProducto = prompt ("Ingrese el nombre del producto");
let precioProducto = prompt ("Ingrese el valor en pesos del producto:");
let salida = nombreProducto + " $" + precioProducto;
alert(salida); */

//Indice de masa corporal
/* let nombre = prompt("Introduzca tu nombre:")
let Altura = parseFloat(prompt("Ingrese su altura:")); 
let PesoCorporal = parseFloat(prompt ("Escribe tu peso corporal"));

let imc = PesoCorporal / (Altura*Altura);
let salida = nombre + "tu imc es " + imc.toFixed(2); //tofixed permite dejar hasta dos decimales
alert(salida);
 */
//parseInt (numero entero), parseFloat (flotante)

//---------------------------- CLASE 2 - Control de flujos -----------------//

//si esto es verdadero es esto sino esto otro

/* if (condition) {
    /* //bloque de codigo q se ejecuta si la condicion es verdadera (true) */
/* }else{ */
    //bloque de codigo a ejecutar si la condicion no es verdadera
/* } */

// == igualdad

/* let edad = 20;
/* //SIN ALERTA */
/* if (edad >=18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
} */
//con ALERTA
/* if (edad >=18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
} */


