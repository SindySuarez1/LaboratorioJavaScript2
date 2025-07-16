const prompt = require("prompt-sync")();

console.log("Programa que simula un cajero")
function retirarDinero(){
    let saldo = parseFloat(prompt("Imngrese el saldo de su cuenta: "));
    let monto = parseFloat(prompt("Ingrese monto a retirar: "));

    if (monto > saldo){
        console.log("Fondos insuficientes")
    }else{
        console.log("Retirando dinero....")
        console.log("su saldo actual es: ", saldo - monto)
    }
}
retirarDinero();