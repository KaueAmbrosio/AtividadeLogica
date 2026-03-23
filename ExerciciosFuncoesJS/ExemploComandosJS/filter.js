console.log("=== EXEMPLOS DE FILTER ===");


let numeros = [1, 2, 3, 4, 5, 6];

console.log("Array Original:", numeros);

let pares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log("Numeros pares:", pares);

let maiorQueTres = numeros.filter(numero => numero > 3)
console.log("Maiores que tres:", maiorQueTres);

