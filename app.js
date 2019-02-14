const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multipllicar');

let comando = argv._[0];
console.log(argv)

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green('Archivo creado: ') + colors.blue(archivo)))
            .catch(e => console.log(e))
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('comando no reconocido');
        break;
}