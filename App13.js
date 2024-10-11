const { crearArchivo } = require ('./helpers/multiplicar4') //configuraciones para nuestra logica
const argv = require('./config/yargs') //configurar los paquetes de terceros
console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
    .catch(err =>console.log(err))
