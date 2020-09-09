/**
 * Ejecutar una funcion llamda desde otro archivo
 */

const fs = require('fs');
let escribirArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let contenido = '';
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            contenido += `${i} * ${ base } = ${i *  base } \n`
        }
        fs.writeFile(
            `tablas/tabla_${ base }.txt`,
            contenido,
            (err) => {
                if (err) {
                    reject(err);
                } else
                    resolve(`Tabla_${ base }.txt`);
            }
        );
    });
};

let mostrarTrabla = (base, limite) => {
    for (let i = 1; i <= limite; i++)
        console.log(`${i} * ${ base } = ${i *  base }`);
}

module.exports = {
    escribirArchivo,
    mostrarTrabla,
}