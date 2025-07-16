function contarPalabras(texto){
    let contador = 0;

    for (let i = 0; i < texto.length; i++){
        if (texto[i] !== " " && (i === 0 || texto[i - 1] === " ")){
            contador ++;
        } 
        
        
    }
    return contador;
}
console.log(contarPalabras("las flores lindas"))