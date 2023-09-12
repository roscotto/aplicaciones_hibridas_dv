# Consigna
## 03 - Módulos - Agenda de Contactos

**Objetivo**: Desarrollar un programa que permita gestionar una agenda de contactos, permitiendo agregar, eliminar y buscar contactos utilizando módulos propios.

**Instrucciones**:

1. **Estructura del Proyecto**:
    - Crea una nueva carpeta llamada **`mod-genda-contactos`**.
    - Inicializa un nuevo proyecto Node con **`npm init`**.
    - Agregar la entrada de **`"type": "module"`** en el archivo**`packege.json`**
    - Crea un archivo principal llamado **`index.js`**.
2. **Módulo de Validaciones**:
    - Crea un nuevo archivo llamado **`validaciones.js`**.
    - Exporta funciones:
        - **`validarTelefono(telefono)`**: Retorna **`true`** si el número de teléfono tiene un formato válido, **`false`** en caso contrario.
        - **`validarEmail(email)`**: Retorna **`true`** si el email tiene un formato válido, **`false`** en caso contrario.
3. **Módulo de Contactos**:
    - Importa el módulo de **`validaciones`**.
    - Cada vez que se intente usar **`agregarContacto`**, valida el teléfono y el email con las funciones del módulo de **`validaciones`**.
    - Si la validación falla, no agregues el contacto.
    - Si la validación es exitosa, procede a agregar el contacto.
4. **Usando los Módulos en el Programa Principal**:
    - Solo necesitarás importar y trabajar con el módulo **`contactos.js`**, ya que este módulo ahora encapsula la lógica de validación.
    - Realiza las siguientes instrucciones:
        - Agrega el contacto “Brian Lara”, “123-456-7890”, “blara@email.com”
        - Agrega el contacto “Juan Gonzalez”, “123-456-7899”, “jgonzalez@email.com”
        - Lista los contactos
        - Agrega el contacto “Error No Funciona”, “000000”, “email-invalido”
        - Lista los contactos y no se debe mostrar el contacto con errores.


💡 **NOTA:** 
Para el desarrollo de esta actividad, se debe utilizar los módulos de **ECMAScript.**
Para las validaciones utilice expresiones regulares (son nativas no hay que importar nada)

------------------------------------------------------------------------------------------------------------------------------------------------------------



## 04 - Módulos Nativos - Gestor de Tareas

**Objetivo**: Extender el programa de la "Agenda de contactos" del punto anterior, para que los usuarios puedan exportar su lista de contactos a un archivo CSV.

**Instrucciones**:

1. **Recuerda la estructura previa**:
    - Tenías el módulo **`contactos.js`** que gestionaba una lista de contactos.
    - También tenías el módulo **`validaciones.js`** para validar los datos antes de agregarlos.
2. **Extensión para la exportación a CSV**:
    - Añade una nueva función en **`contactos.js`** llamada **`exportarCSV`**.
    - Esta función generará una cadena en formato CSV a partir de **`listaContactos`** y utilizará el módulo **`fs`** para guardarla en un archivo.
    - la función debe recibir como parámetro el nombre del archivo a exportar (por defecto debe ser contactos.csv)
3. **Usando la nueva funcionalidad en el programa principal**:
    - En tu archivo **`index.js`** (o donde estés utilizando el módulo **`contactos`**), después de realizar algunas operaciones, puedes llamar a la función **`exportarCSV`** para guardar la lista actual en un archivo.


💡 **NOTA:**
  Para el desarrollo de esta actividad, se debe utilizar los módulos de ECMAScript.
