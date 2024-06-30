//*TAREA ENTREGADA 1ER ENTREGA

let producto1 = parseFloat(prompt("Ingrese el importe del producto #1")); /* parseInt convierte en numero ingresado a entero */
let producto2 = parseFloat(prompt("Ingrese el importe del producto #2"));//Em prompt guarda el valor ingresado como tipo de dato string
let cupon = prompt("Ingrese el Código del Cupon");

//DATOS DEL SISTEMA
const montoMaximo1 = 5000;
const montoMaximo2 = 10000;
const montoMaximo3 = 25000;
const descuentoMaximo1 = 10;
const descuentoMaximo2 = 15;
const iva = 22;
const cuponValido = "PRIMERENTREGA";
let descuentoAplicado = 0;

// CALCULAMOS LOS DOS MONTOS INGRESADOS
let total = producto1 + producto2;

if (total > montoMaximo1 && total <= montoMaximo2) {
    console.log ("Total: $" + total);
    descuentoAplicado = (total * descuentoMaximo1) / 100;
    console.log ("Descuento " + descuentoMaximo1 + "% $" + descuentoAplicado);
    total = total - descuentoAplicado;
    console.log ("Total c/Descuento aplicado: " + total) 
    console.log ("IVA " + total * iva / 100)
    console.log ("Total a pagar $ " + total * 1.22);
} else if (total > montoMaximo2) {
    console.log ("Total: $" + total);
    descuentoAplicado = (total * descuentoMaximo2) / 100;
    console.log ("Descuento " + descuentoMaximo2 + "% $" + descuentoAplicado);
    total = total - descuentoAplicado;
    console.log ("Total c/Descuento aplicado: " + total) 
    console.log ("IVA " + total * iva / 100)
    console.log ("Total a pagar $ " + total * 1.22);
}
