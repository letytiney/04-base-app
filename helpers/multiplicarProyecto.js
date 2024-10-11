const fs = require('fs');
const colors = require('colors');
const PDFDocument = require('pdfkit');
const path = require('path');


const crearArchivo = async (base = 5, listar = false, limite = 10, hasta = base) => {
    try {

          // Ensure the 'salida' directory exists
          const salidaDir = path.join(__dirname, '../salida');
          if (!fs.existsSync(salidaDir)) {
              fs.mkdirSync(salidaDir);
          }
          
        for (let baseActual = base; baseActual <= hasta; baseActual++) {
            let consola = '';
            let salida = '';

            // crear documento PDF
            const doc = new PDFDocument();
          //  const pdfFileName = `tabla-${baseActual}.pdf`;
            const pdfFileName = path.join(salidaDir, `tabla-${baseActual}.pdf`);

           
            doc.pipe(fs.createWriteStream(pdfFileName));

         
            doc.fontSize(16).text(`Tabla de Multiplicar del ${baseActual}`, { align: 'center' });
            doc.moveDown();

            for (let i = 1; i <= limite; i++) {
                const line = `${baseActual} x ${i} = ${baseActual * i}`;
                salida += line + '\n'; 
                consola += `${baseActual} ${'x'.blue} ${i} ${'='.yellow} ${baseActual * i}\n`;

              
                doc.fontSize(12).text(line);
            }

         
            doc.end();

            if (listar) {
                console.log('===================='.yellow);
                console.log('    Tabla del:'.green, colors.blue(baseActual) + ' hasta ' + colors.red(hasta));
                console.log('===================='.yellow);
                console.log(consola);
            }

            console.log(`${pdfFileName} creado.`); 
        }

        return `Tablas del ${base} al ${hasta} creadas.`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}