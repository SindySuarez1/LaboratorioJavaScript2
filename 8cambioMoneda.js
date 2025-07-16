const prompt = require("prompt-sync")();

function convertirMoneda(){
    let monto = parseFloat(prompt("Ingresa el monto a convertir en COP: "));
    let monedaDeDestino = prompt("Converción elige la opción: 1 = USD Ó 2 = EUR: ");

    if (monedaDeDestino == 1){
        let total = monto / 4012.61;
        console.log("El total es: ",total, "USD")
    } 
    else if (monedaDeDestino == 2){
        let total = monto / 4675.80;
        console.log("El total es: ", total, "EUR");
    } else{
        console.log("Opción ingresada incorrecta")
    }
}

convertirMoneda();