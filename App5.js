const { crearArchivo } = require ('./helpers/multiplicar2')

console.clear();

const base = -3;


crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=>console.log(err));
    