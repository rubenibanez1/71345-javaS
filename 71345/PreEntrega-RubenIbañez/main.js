

//DATOS DEL SISTEMA
const montoMaximo1 = 5000;
const montoMaximo2 = 10000;
const montoMaximo3 = 25000;
const descuentoMaximo1 = 10;
const descuentoMaximo2 = 15;
const cuponValido = "PRIMERENTREGA";
let descuentoAplicado = 0;

// CALCULAR LOS DOS MONTOS INGRESAADOS
let total = producto1 + producto2;

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
}
