import contactos from './contactos.js';

contactos.agregarContacto('Brian Lara', '123-456-7890', 'blara@email.com');

contactos.agregarContacto('Juan Gonzalez', '123-456-7899', 'jgonzalez@email.com');

contactos.agregarContacto('Error No Funciona', '000000', 'email-invalido');

contactos.listarContactos();

contactos.exportarCSV('contactos.csv');