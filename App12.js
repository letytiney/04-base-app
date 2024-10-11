const { crearArchivo } = require ('./helpers/multiplicar4')

const argv = require('yargs')
                .option('b', {
                    alias: 'base', 
                    type: 'number', 
                    demandOption:true
                })
                .option('l', {
                    alias: 'listar', 
                    type: 'boolean', 
                    demandOption:false
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true; //Esta es la parte mas importante para lanza validacion
                })
                .argv

                console.clear();

console.log(argv);// del paquete yargs

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
    .catch(err =>console.log(err))

console.log( 'base yargs: ', argv.b)