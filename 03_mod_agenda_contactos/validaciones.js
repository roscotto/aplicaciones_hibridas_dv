
/**
 * Función que valida que el formato del teléfono sea correcto
 * @returns {Boolean} true si el formato es correcto, false en caso contrario
 */
function validarTelefono(telefono)
{
    let telefonoRegex = /^[0-9]{9}$/;
   
    if(telefonoRegex.test(telefono)) {
        return true
    } else {
        return false
    }

}


/**
 * Función que valida que el formato del email sea correcto
 * @returns {Boolean} true si el formato es correcto, false en caso contrario
 */
function validarEmail(email)
{
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if(emailRegex.test(email)){
        return true;
    } else {
        return false;
    }
}

export default {
    validarTelefono,
    validarEmail
}