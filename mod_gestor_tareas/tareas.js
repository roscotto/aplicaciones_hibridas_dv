
let listaTareas = [];

function agregarTarea(tarea) {
    listaTareas.push(tarea);
    return listaTareas;
}


function listarTareas() {
    console.log(listaTareas);
}


function eliminarTarea(indice) {
    listaTareas.splice(indice,1)
  }

export default {
    agregarTarea,
    listarTareas,
    eliminarTarea
}