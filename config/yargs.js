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


                module.exports = argv;