const { crearArchivo } = require('./helpers/multiplicarProyecto.js');
const colors = require('colors');
const argv = require('./config/yargsProyecto.js');

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.i, argv.h)
    .then(nombreArchivo => {
        const mensaje = `${nombreArchivo} creado`;
        
        // Calcular el ancho de la consola
        const anchoConsola = 120; // Cambia este valor según el ancho deseado
        const espacios = ' '.repeat(Math.max(0, Math.floor((anchoConsola - mensaje.length) / 2)));

        // Mostrar el mensaje centrado
        console.log(espacios + mensaje.red);
    })
    .catch(err => console.log(err));