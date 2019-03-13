// destructuracion
const {estudiante, obtenerPromedio} = require('./calculo');
console.log('el promedio del estudiante es: ' + obtenerPromedio(estudiante.notas.matematica, estudiante.notas.ingles, estudiante.notas.programacion));

const {nombre, edad : years, notas:{matematica, ingles, programacion}} = estudiante;
console.log('el nombre del estudiante es: ', nombre);
console.log('el promedio del estudiante es: ', obtenerPromedio(matematica, ingles, programacion));
console.log('la edad del estudiante es: ', years);

// uso de require con funciones nativas, creacion de archivos
const fs = require('fs');
const crearArchivo = (estudiante) => {
    const texto = 'El nombre del estudiante es ' + nombre + '\n' + 'ha obtenido un promedio de ' + obtenerPromedio(matematica, ingles, programacion);
    fs.writeFile('promedio.txt', texto, (error) => {
        if (error) {
            throw(error);
        }
        console.log('se ha creado el archivo');
    });
};

crearArchivo(estudiante);