//? Entrada de datos

let nombreCliente = prompt("Ingrese su nombre y Apellido")
let textoTipoCliente = "Ingrese su paquete de Servicios: \n\n";
textoTipoCliente += "1-HSBC Premier Black\n";
textoTipoCliente += "2-HSBC Premier\n";
textoTipoCliente += "3-HSBC Premier Advanced\n";
textoTipoCliente += "4-HSBC Standard";
let tipoCliente = prompt (textoTipoCliente);
let monto = parseInt(prompt("Ingrese el monto: ($10000 - $100000"));
let textoPlazo = "Ingrese el plazo: \n\n";
textoPlazo += "1- 12 cuotas\n";
textoPlazo += "2- 24 cuotas\n";
textoPlazo += "3- 36 cuotas\n";
let plazo = parseInt(prompt(textoPlazo));


//!Chequeando como quedan los datos ingresados
console.log ("Cliente: " + nombreCliente);
console.log ("Tipo: " + tipoCliente);
console.log ("Monto" + monto);
console.log ("Plazo" + plazo);

//?Procesamiento de datos

