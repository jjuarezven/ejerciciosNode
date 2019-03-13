function promedio1(nota_uno, nota_dos, nota_tres) {
    const resultado = (nota_uno + nota_dos + nota_tres) / 3;
    console.log(resultado);
}

// asincronia
const promedio2 = (nota_uno, nota_dos, nota_tres) => {
    setTimeout(() => {
        const resultado = (nota_uno + nota_dos + nota_tres) / 3;
        console.log(resultado);
    }, 2000);
};

const promedio3 = (nota_uno, nota_dos, nota_tres) => console.log((nota_uno + nota_dos + nota_tres) / 3);

promedio1(2, 3, 4);
promedio2(1, 2, 1);
promedio3(5, 4, 5);

// callbacks
const promedio4 = (nota_uno, nota_dos, nota_tres, callback) => {
    setTimeout(() => {
        const resultado = (nota_uno + nota_dos + nota_tres) / 3;
        callback(resultado);
    }, 100);
};
//console.log('el promedio es: ' + promedio4(5,4,5)); // undefined
promedio4(5, 4, 5, (resultado) => console.log('el promedio es: ' + resultado));