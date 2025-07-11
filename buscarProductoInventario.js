/*Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre:*/



function buscarProducto(nombre, inventario){
    const inventario = [
        {nombre : "camisa", precio: 20},
        {nombre: "zapatos", precio: 50},
        {nombre: "lapiz", precio: 70}
        {nombre: "color", precio: 30}
        {nombre: "pulsera", precio: 40}

    ];

    for (let i=0; i < inventario.length; i++ ){
        if(inventario[i].nombre() == nombre()){
        return inventario[i];
   
    }
     else{
        null
    }
}
}
let producto = buscarProducto("lapiz")
console.log(producto)