/*
 * Tabla de multiplicar
 */


const { escribirArchivo, mostrarTrabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
/**
 *  Este codigo incluye la configuracion de parametros de yargs
 * Como el condigo del app debe ser lo mas claro y limpio posible voy a Pasar este codigo a una carpeta de configuracion

const argv = require('yargs')
    //command especifica lo que puede hacer un comando el primer atrb es el literal, el segundo es una descripcion, y el tercero tiene las caracteristicas de cada parametro
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10,
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar introducida como parametro hasta el limete', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10,
        }
    })
    .help() //crea un menu de ayuda para el comando
    .argv;
 */
//console.log(argv);

//console.log('Base:', argv.base); acceder a un atributo de la variable que contiene los argumentos de ejecucion

let comando = argv._[0]; // capturando el primer comando del arreglo de comandos

switch (comando) {
    case 'listar':
        mostrarTrabla(argv.base, argv.limite);
        break;
    case 'crear':
        escribirArchivo(argv.base, argv.limite) //asi se llama si la variable contiene la referencia directa a la función.
            .then(nombre => console.log(`El Archivo ${ nombre } ha sido creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No se reconoce el comando');
}
/*

*/