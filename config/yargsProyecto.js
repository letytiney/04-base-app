const argv = require('yargs')
                .option('b', {
                    alias: 'base', 
                    type: 'number', 
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar', 
                    type: 'boolean', 
                    demandOption:false,
                    describe:'Muestra la tabla en consola'
                })
                  .option('i', {
                    alias: 'limite', 
                    type: 'number', 
                    demandOption:false,
                    describe:'Es limite de la multiplicacion de cada tabla'
                })
                .option('h', {
                    alias: 'hasta', 
                    type: 'number', 
                    demandOption:false,
                    describe:'Es limite donde se imprimen las tablas'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }// Validacion de base y hasta
                    if (argv.h && argv.h < argv.b) {
                        throw new Error('El valor de "hasta" debe ser mayor que la base');
                    }
                    return true; //Esta es la parte mas importante para lanza validacion
                })
                .argv


                module.exports = argv;