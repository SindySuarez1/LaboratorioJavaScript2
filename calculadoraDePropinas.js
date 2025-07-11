function calcularPropina(total, porcentaje){
    propina = (total * porcentaje)/100;
    total = propina + total;
    return total;
}
resultado = calcularPropina(100000, 10)
console.log("el total de su cuenta es: " , resultado )

