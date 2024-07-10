
//!Declaro una funcion con parametros

function nombreCompleto(a1, a2, a3) { //segun los parametros que salen son los que en un principio ingrese, en este caso a1 y a2, si hubiera puesto 3 en -> "nombreCompleto tengo que poner 3 para que no me de error"
    alert("Nombre: " + a1 + " " + a2 + "\n" + "DNI: " + a3 + "\n" + "Bienvenido " + a1 + "!!");
}//LA FUNCION TERMINA ACA

function solicitarNombre() { 
    let nI = prompt("Ingrese su Nombre:");
    let aI = prompt("Ingrese su Apellido:");
    let ciI = prompt("Ingrese su Cédula de identidad sin puntos ni guiones:")
    nombreCompleto(nI,aI,ciI);
}//LA FUNCION TERMINA ACA

//LLAMAR A LA FUNCIÓN
solicitarNombre();


//! ******************************          ********************************

let producto1 = parseFloat(prompt("Ingrese el importe del producto #1")); /* parseInt convierte en numero ingresado a entero */
let producto2 = parseFloat(prompt("Ingrese el importe del producto #2"));//En prompt guarda el valor ingresado como tipo de dato string
let cupon = prompt("Ingrese el Código del Cupon");

//?DATOS DEL SISTEMA
const montoMaximo1 = 5000;
const montoMaximo2 = 10000;
const montoMaximo3 = 25000;
const descuentoMaximo1 = 10;
const descuentoMaximo2 = 15;
const iva = 22;
const cuponValido = "PRIMERENTREGA";
let descuentoAplicado = 0;



//! CALCULAMOS LOS DOS MONTOS INGRESADOS
let totalCompra = producto1 + producto2;


if (totalCompra > montoMaximo1 && totalCompra <= montoMaximo2) {
    console.log ("Total: $" + totalCompra);
    descuentoAplicado = (totalCompra * descuentoMaximo1) / 100;
    console.log ("Descuento " + descuentoMaximo1 + "% $" + descuentoAplicado);
    total = totalCompra - descuentoAplicado;
    console.log ("Total c/Descuento aplicado: " + total) 
    ivaTotal = total * iva / 100;
    console.log ("IVA " + ivaTotal.toFixed(2))
    console.log ("Total a pagar $ " + total * 1.22);
    alert("Total: $" + totalCompra + "\n" + "Descuento " + descuentoMaximo1 + "% $" + descuentoAplicado + "\n" + "Total c/Descuento aplicado: " + total + "\n" + "IVA " + ivaTotal.toFixed(2) + "\n" + "Total a pagar $ " + total * 1.22)
} else if (totalCompra > montoMaximo2) {
    console.log ("Total: $" + totalCompra);
    descuentoAplicado = (totalCompra * descuentoMaximo2) / 100;
    console.log ("Descuento " + descuentoMaximo2 + "% $" + descuentoAplicado);
    total = totalCompra - descuentoAplicado;
    console.log ("Total c/Descuento aplicado: " + total) 
    ivaTotal = total * iva / 100;
    console.log ("IVA " + ivaTotal.toFixed(2)) //toFixed entre parentesis es cuantos decimales quiero que se vean
    console.log ("Total a pagar $ " + total * 1.22);
    alert(("Total: $" + totalCompra) + "\n" + "Descuento " + descuentoMaximo2 + "% $" + descuentoAplicado + "\n" + "Total c/Descuento aplicado: " + total + "\n" + "IVA " + ivaTotal.toFixed(2) + "\n" + "Total a pagar $ " + total * 1.22)
}




