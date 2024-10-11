const { crearArchivo } = require ('./helpers/multiplicar3')

const argv = require('yargs')
                .option('b', {
                    alias: 'base', 
                    type: 'number', 
                    demandOption:true
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv

                console.clear();

console.log(process.argv);//interno
console.log(argv);// del paquete yargs

console.log( 'base yargs: ', argv.b)