let estudiante = {
    nombre: 'Juan',
    edad: 25,
    notas: {
        matematica: 3,
        ingles: 4,
        programacion: 5
    }
};

const obtenerPromedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
//console.log(obtenerPromedio(estudiante.notas.matematica, estudiante.notas.ingles, estudiante.notas.programacion));

module.exports = { estudiante, obtenerPromedio };