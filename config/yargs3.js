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
                  .option('h', {
                    alias: 'hasta', 
                    type: 'number', 
                    demandOption:false,
                    describe:'Es hasta que tabla se debe dejar de multiplicar'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true; //Esta es la parte mas importante para lanza validacion
                })
                .argv


                module.exports = argv;