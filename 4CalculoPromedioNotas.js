const prompt = require("prompt-sync")();

console.log("Programa que calcula promedio de nota")

function calcularPromedio(){
    let notasUsuario = prompt("Ingrese las notas separadas por coma sin espacio: ");
    let notas = notasUsuario.split(",").map(nota => parseFloat(nota));
    //split separa una cadena de texto(en este caso por coma), las guarda en un array
    // map = crea un segundo array convirtiendo a numero sus elementos

let suma = 0;
for (let i = 0; i < notas.length; i ++){// length: cuenta la cantidad de caracteres que tiene una cadena
    suma += notas[i];
}
const promedio = suma / notas.length;
console.log("El promedio es: ", promedio.toFixed(2))// esta solo nos da 2 decimales

}

calcularPromedio();