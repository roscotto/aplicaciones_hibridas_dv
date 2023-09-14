# Consigna
## 02 - Modulos - Gestor de Tareas

**Objetivo**: Crear un pequeño programa de consola utilizando módulos propios para gestionar una lista de tareas.

**Instrucciones**:

1. **Estructura del Proyecto**:
    - Crea una nueva carpeta para tu proyecto llamada **`mod-estor-tareas`**.
    - Inicializa un nuevo proyecto Node con **`npm init`**.
    - Agregar la entrada de **`"type": "module"`** en el archivo**`packege.json`**
    - Crea un archivo principal llamado **`index.js`**.
2. **Módulo de Tareas**:
    - Crea un nuevo archivo llamado **`tareas.js`**.
    - En este archivo, define un array llamado **`listaTareas`** para almacenar tareas.
    - Exporta las siguientes funciones:
        - **`agregarTarea(tarea)`**: Agrega una tarea a **`listaTareas`**.
        - **`listarTareas()`**: Muestra todas las tareas en la consola.
        - **`eliminarTarea(indice)`**: Elimina una tarea según su índice.
3. **Usando el Módulo en el Programa Principal**:
    - En **`index.js`**, importa el módulo **`tareas.js`**.
    - Utiliza el módulo para agregar algunas tareas, listarlas y eliminar alguna de ellas.
  

Ejemplo:

        import tareas from './tareas.js';
        
        tareas.agregarTarea("Aprender módulos en Node.js");
        tareas.agregarTarea("Practicar con un proyecto");
        
        tareas.listarTareas();
        
        tareas.eliminarTarefa(0);
        
        tareas.listarTareas();

---------------------------------------

NOTA: 
Para el desarrollo de esta actividad, se debe utilizar los módulos de ECMAScript.
