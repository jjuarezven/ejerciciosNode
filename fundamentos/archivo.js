const opciones = { 
    matematica: { 
        default: 0, 
        alias: 'm' 
    }, 
    ingles: { 
        default: 0, 
        alias: 'i' 
    }, 
    programacion: { 
        demand: true, 
        alias: 'p' 
    } 
};
const argv = require('yargs').command('promedio', 'calcular el promedio', opciones).argv;
/* console.log(argv.ingles);
console.log('El nombre del estudiante es ' + argv.nombre); */
console.log('El promedio es ' + (argv.m + argv.i + argv.p) / 3);