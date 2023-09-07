
// Se declara la variable listaTareas que es un array vacío
let listaTareas = [];

// Función que agrega una tarea a la lista de tareas
function agregarTarea(tarea) {
    // Se agrega la tarea al array
    listaTareas.push(tarea);
    // Se retorna el array actualizado
    return listaTareas;
}


//Función que lista las tareas
function listarTareas() {
    // Se imprime en consola el array con las tareas
    console.log(listaTareas);
}


// Función que elimina una tarea de la lista de tareas
function eliminarTarea(indice) {
    // Se elimina el elemento del índice indicado
    listaTareas.splice(indice,1)
  }

// Se exportan las funciones
export default {
    agregarTarea,
    listarTareas,
    eliminarTarea
}