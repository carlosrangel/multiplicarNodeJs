/*
 * Tabla de multiplicar
 */

//requireds
//const fs = require('fs'); //Estaba antes de separar el codigo

//la importacion se puede hacer de esta forma
//let multiplicar = require('./multiplicar/multiplicar');

//O se puede usar destructuracion para que la variable apunte directamente a la funcion
let { escribirArchivo } = require('./multiplicar/multiplicar');
//let base = '1';

//Puedo obtener la base como parametro al ejecutar el archivo
//el obtejo process tiene un atributo argv, los dos primeros son el path de node y el segundo el path del archivo actual
let base = process.argv[2].split('=')[1];

/* Lo pase al archivo de multiplicar

let contenido = '';
for (let i = 1; i <= 10; i++) {
    contenido += `${i} * ${ base } = ${i *  base } \n`
}
fs.writeFile(
    `tablas/tabla_${ base }.txt`,
    contenido,
    (err) => {
        if (err) {
            throw err;
        } else
            console.log(`Archivo Tabla_${ base }.txt Creado`);
    }
);
*/

// multiplicar.escribirArchivo(base) //asi se llamaria si hice el require del nombre del archivo
escribirArchivo(base) //asi se llama si la variable contiene la referencia directa a la función.
    .then(nombre => console.log(`El Archivo ${ nombre } ha sido creado`))
    .catch(err => console.log(err));