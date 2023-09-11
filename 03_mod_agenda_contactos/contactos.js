import validaciones from './validaciones.js';
import fs from 'node:fs';

let listaContactos = [];


/**
 * Función que agrega un contacto a la lista de contactos
 * @param {*} nombre 
 * @param {*} telefono 
 * @param {*} email 
 */
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

/**
 * Función que lista los contactos
 * @returns {Array} lista de contactos
 */
function listarContactos() {
    console.log(listaContactos);
}

/**
 * Función que exporta los contactos a un archivo CSV
 * @param {} nombreArchivoExcel 
 */
function exportarCSV(nombreArchivoExcel) {
    
    let encabezadoColumnas = 'Apellido y Nombre, Teléfono, Email\n';
    
    let textoConcatenado = listaContactos.map((dato) => `${dato.nombre},${dato.telefono},${dato.email}`).join('\n');
    
    let contenidoExcel = encabezadoColumnas + textoConcatenado;

    fs.writeFile(nombreArchivoExcel, contenidoExcel, {encoding: 'utf-8', flag: 'w'}, function(err, data) {
        if(err) {
            console.log("No se pudo escribir el archivo");
        } else {
            console.log("Se pudo escribir correctamente");
        }
    })
    // Por qué me toma mal el acento si le puse utf-8?
    // Cómo hago para que los datos se ubiquen en diferentes columnas??
    
}

// Exportamos las funciones
export default {
    agregarContacto,
    listarContactos,
    exportarCSV

}

