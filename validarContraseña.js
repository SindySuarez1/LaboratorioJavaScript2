

function validarContraseña(contraseña){
    const ochoCaracteres = contraseña.length >= 8;
    const validarNumero = /[0-9]/.test(contraseña);
    const validarMayuscula = /[A-Z]/.test(contraseña);

    if(ochoCaracteres && validarNumero && validarMayuscula)
    {
         return true; 
    }
    else{
        return false;
    }

}
let contraseña = validarContraseña("sindy")
if (contraseña){
    console.log("valida")
}else{
    console.log("No cumple los requisitos")
}

