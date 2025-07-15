console.log("Programa que busca producto en inventario")

function buscarProducto(nombre, inventario){
    const inven = [
        {nombre : "camisa", precio: 20},
        {nombre: "zapatos", precio: 50},
        {nombre: "lapiz", precio: 70},
        {nombre: "color", precio: 30},
        {nombre: "pulsera", precio: 40}

    ];

    for (let i=0; i < inven.length; i++ ){
        if(inven[i].nombre === nombre){
        return inven[i];
   
    }
}
return null;
}
let producto = buscarProducto("osso")
console.log(producto)