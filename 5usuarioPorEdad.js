console.log("Programa que calcula si una lista de personas tienen más de 18 años")
let listaUsuarios = [
    {nombre: "Estella", edad: 30},
    {nombre: "Sandra", edad: 15},
    {nombre: "Sofía", edad: 18},
    {nombre: "Sindy", edad: 22},
    {nombre: "Julieth", edad: 12},
    {nombre: "Karina", edad: 11},

];

function filtrarUsuarios(usuarios, edadMinima){
    let busqueda = [];

    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].edad >= edadMinima){
            busqueda.push(usuarios[i]);
        }
    }
    return busqueda;
}
const edadMinima = 18;
listaUsuarios = filtrarUsuarios(listaUsuarios, edadMinima);

for (let i = 0; i < listaUsuarios.length; i++){
    console.log(listaUsuarios[i].nombre, listaUsuarios[i].edad);

}