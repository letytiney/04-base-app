/*Iniciar un proyecto con npm init y instalar las dependencias de colores y yargs */

const { crearArchivo } = require ('./helpers/multiplicar3')
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);//interno
console.log(argv);// del paquete yargs

console.log( 'base yargs: ', argv.base)
