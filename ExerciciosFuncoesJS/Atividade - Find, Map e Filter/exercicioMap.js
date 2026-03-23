// ATIVIDADE - MAP

// 1) Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).

const temperaturas = [20, 25, 30, 15];

let Fahrenheit = temperaturas.map(function (celsius) {
    return (celsius * 1.8) + 32;
});

console.log("Temperaturas convertidas:", Fahrenheit)