import validaciones from './validaciones.js';

let listaContactos = [];

function agregarContacto(nombre, telefono, email) {

   
    if (nombre && validaciones.validarTelefono(telefono) == true && validaciones.validarEmail(email) == true) {
        let contacto = {
            'nombre': nombre,
            'telefono': telefono,
            'email': email
        }

        listaContactos.push(contacto)

        console.log('Contacto agregado');
    } else {
        console.log('Contacto no agregado');
    }


}

function listarContactos() {
    console.log(listaContactos);
}


export default {
    agregarContacto,
    listarContactos

}