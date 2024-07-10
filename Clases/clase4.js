
//////////////////*     Clase 4         ////////////////////////////
//!FUNCIONES/// forma de poder ordenar y agrupar un conjunto de instrucciones en un determinado nombre

//DECLARANDO UNA FUNCIÓN
/* function saludar(params) {
    console.log ("Bienvenido")
}
//Llamar o invocar una funcion
saludar(); //si o si tiene que tener parentesis
 */


/* 
//!Declarando una funcion con parametros
function nombreCompleto(a1, a2) { //segun los parametros que salen son los que en un principio ingrese, en este caso a1 y a2, si hubiera puesto 3 en -> "nombreCompleto tengo que poner 3 para que no me de error"
    alert("Hola " + a1 + " " + a2)
    alert("Bienvenido !! ")
}//LA FUNCION TERMINA ACA


let nombreIngresado = prompt("Ingrese su Nombre");
let apellidoIngresado = prompt("Ingrese su Apellido");
let ciIngresado = prompt("Ingrese su número de cédula sin puntos ni guiones")

//LLAMAR A LA FUNCIÓN
nombreCompleto(nombreIngresado, apellidoIngresado);
 */


/* //!Declarando una funcion con parametros
function nombreCompleto(a1, a2, a3) { //segun los parametros que salen son los que en un principio ingrese, en este caso a1 y a2, si hubiera puesto 3 en -> "nombreCompleto tengo que poner 3 para que no me de error"
    alert("Nombre: " + a1 + " " + a2 + "\n" + "DNI: " + a3 + "\n" + "Bienvenido " + a1 + "!!");
}//LA FUNCION TERMINA ACA

function solicitarNombre() { 
    let nI = prompt("Ingrese su Nombre:");
    let aI = prompt("Ingrese su Apellido:");
    let ciI = prompt("Ingrese su Cédula de identidad sin puntos ni guiones:")
    nombreCompleto(nI,aI,ciI);
}//LA FUNCION TERMINA ACA */

//LLAMAR A LA FUNCIÓN
//solicitarNombre();




//!    calculo IMC

/* function obtenerIMC(peso, altura) {
    return peso / (altura * altura);
}

function estadoDeSalud(imc) {
    let salida;

    if (imc < 18.5) {
        salida = "peso inferior al normal"
    } else if (imc >= 18.5 && imc <= 24.9) {
        salida = "normal";
    } else if (imc >= 25 && imc <= 29.9){
        salida = "peso superior al normal"
    } else {
        salida = " obesidad"
    }

    return salida;
}

let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrese su altura:"))
let miImc = obtenerIMC(peso, altura);
let miEstadoDeSalud = estadoDeSalud(miImc);
alert("IMC: " + miImc.toFixed(2) + "%" + "\n" + "Estado de Salud: " + miEstadoDeSalud);
 */





//?-------------------- SCOPE ---------------------------
// VARIABLE GLOBAL Y LOCAL

//VARIABLE GLOBAL
/* let resultado = 0; 

function sumar (num1, num2){
    resultado = num1 + num2;
}

sumar(20, 30);
console.log(resultado);
console.log("Resultado: " + resultado); */

//VARIABLE LOCAL
/* let resultado = 0; 

function sumar (num1, num2){
    let resultado = num1 + num2; //resultado es una variable local
    console.log(resultado); // tienen que estar dentro y no fuer como el global
    console.log("Resultado: " + resultado); // tienen que estar dentro y no fuer como el global
    return resultado
}
sumar(20, 30); */

//?*****************funciones anonimas y funciones flechas ****************
//funciones anonimas

/* const suma = function (valor1, valor2){
    return valor1 + valor2; //me devuelve la suma de valor 1 y valor 2
}

let resultado = suma(20, 22)
console.log("Resultado " + resultado);
 */


//Funciones flechas
const suma =() => {
    console.log("inicio de la funcion")
    let resultado = valor1 + valor2;
    console.log("FIN DE LA FUNCION");

    return resultado;
}
let calculo = suma(30, 50);
console.log(calculo);   