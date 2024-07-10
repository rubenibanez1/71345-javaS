//Clases
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

/* let edad = prompt("Por favor ingrese su edad");

if (edad >=18) {
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad");
} */

/* let nombreDeUsuario=prompt("Ingresa el nombre del usuario");
if (nombreDeUsuario == "") { 
    alert("No se a ingresado ningun valor")
} else {
    alert("Nombre de usuario ingresado " + nombreDeUsuario)
} */

//LA IDEA ES SOLICITAR 2 INGRESOS DE IMPORTES  Y SI EL TOTAL SUPERA  LOS $10.000 PESOS, REALIZAR UN 10% DE DESCUENTO ---- ejemplo 1
/* let producto1 = parseFloat(prompt("Ingrese el importe del producto #1")); */ /* parseInt convierte en numero ingresado a entero */
/* let producto2 = parseFloat(prompt("Ingrese el importe del producto #2")); *///Em prompt guarda el valor ingresado como tipo de dato string
/* let total = producto1 + producto2;

if (total >10000) {
    total = total *0.9;
}

alert("total a pagar es: $" + total); */

//-------------------------------------------***********
// ejemplo 2 - 
//Si supera:
//100.000 pesos 10%
//200.000 pesos 15%
// Si el usuario tiene un cupon de decuento "CUPON10" se le asigna un 10% adicional

//DATOS INGRESADOS POR EL USUARIO
//let producto1 = parseFloat(prompt("Ingrese el importe del producto #1")); /* parseInt convierte en numero ingresado a entero */
//let producto2 = parseFloat(prompt("Ingrese el importe del producto #2"));//Em prompt guarda el valor ingresado como tipo de dato string
//let cupon = prompt("Ingrese el Código del Cupon");

//DATOS DEL SISTEMA
/* const montoMaximo1 = 100000;
const montoMaximo2 = 150000;
const montoMaximo3 = 200000;
const descuentoMaximo1 = 10;
const descuentoMaximo2 = 15;
const cuponValido = "CUPON10";
let descuentoAplicado = 0; */

//ANALIZAR LOS DATOS INGRESADOS - CALCULAR LOS DOS MONTOS INGRESAADOS
/* let total = producto1 + producto2;

if (total >montoMaximo1 && total <= montoMaximo2) {
    console.log("Total: $" + total);
    descuentoAplicado = (total * descuentoMaximo1) / 100;
    console.log("Descuento " + descuentoMaximo1 + "% $" + descuentoAplicado);
    total = total - descuentoAplicado;
    console.log("Total c/Descuento aplicado: " + total) 
} else if (total > montoMaximo2) {
    console.log("Total: $" + total);
    descuentoAplicado = (total * descuentoMaximo2) / 100;
    console.log("Descuento " + descuentoMaximo2 + "% $" + descuentoAplicado);
    total = total - descuentoAplicado;
    console.log("Total c/Descuento aplicado: " + total) 
} */

//-------------------------------------------***********

//------------------------- Clase 3 - Ciclos e iteraciones -----------------------------------//

//for
/* alert("Inicio")

for(let i=0; i<10; i++) {
    let resultado = numeroIngresado *i;
    alert(numeroIngresado + "X" + i + " = " + (resultado));
}

alert("Fin"); */


//alt*2 = \n = salto de linea
//salida con variables string
/* let nombre = prompt("Ingrese su nombre")
let mensaje ="Hola  " + nombre + "\n\n";
mensaje +="cómo estás?"; //si va solo el igual se pisa el mensaje anterior
alert(mensaje);
console.log(mensaje); */


// Sentencia Breack (Detener la ejecución)
/* let numeroIngresado = parseInt(prompt("Ingrese un valor:"));
let salida = "Tabla del " + numeroIngresado + "\n\n"; */

// Ejemplo con toda la tabla    
/* for (let i=1; i<=10; i++) {
    if (i > 5) {
        break; // Cortar la ejecucion del for
    }

    let resultado = numeroIngresado * i;
    salida +=numeroIngresado + "x" + i +" = " + resultado +"\n";

}

alert(salida); */


//!    while (ciclo condicional, siempre y cuando se cumpla la condicion se ejecutara permanentemente)
let ingresar = prompt("Ingrese un texto: (ESC para salir)");

/* while (ingresar.toUpperCase() != "ESC") { 
    //mojora la validacion
    //if (ingresar.toUpperCase() =="ESC"){
        //console.log("Estoy aca ");
        //break;
    //}

    alert("Ingreso el texto: " + ingresar);
    ingresar = prompt ("Ingrese otro texto: (ESC para salir) ");
} */

//********* DO WHILE */ (Similar al while pero al menos ejecuta la primera vez)
//TE ASEGURAS DE QUE SE EJECUTE UNA VEZ, en este caso el do while muestra el 10, mientras que en el while se corta sin mostrar
/* let numero = 0; */
//mientras no se ingrese el numero 10, que haga tal cosa
/* do {
    numero =parseInt(prompt("Ingrese el número:"));
    alert("Ingresaste el Número: " + numero);
} while (numero != 10);

 */

//DATOS INGRESADOS POR EL USUARIO
//let producto1 = parseFloat(prompt("Ingrese el importe del producto #1")); /* parseInt convierte en numero ingresado a entero */
//let producto2 = parseFloat(prompt("Ingrese el importe del producto #2"));//Em prompt guarda el valor ingresado como tipo de dato string
//let cupon = prompt("Ingrese el Código del Cupon");

//********* SWITCH   (comparo valores de una variable) */ es lo mismo que representarlo con if, else if y else
//si es 1 que haga tal cosa, si hace 2 que haga tal cosa...
let entrada = prompt ("Ingrese su nombre");

while (entrada.toUpperCase() != "ESC") {
    switch (entrada) { //key = entrada
        case "Camila": // value = Caamila
            alert("Hola Cami")
            break;
    
        case "Sebastian": // value = Caamila
            alert("Hola Sebastian")
            break;
        default:
            alert("Quien eres?")    
            break; //cada break es del switch
    }
    entrada = prompt ("Ingrese otro nombre").toUpperCase();
}
    
//?  el break no se usa en los if porque hace cortar, mientrtas que en el while si hay que usarlo para cortar la comparacion entre los demas cases.








