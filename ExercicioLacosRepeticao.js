const prompt = require("prompt-sync")();

// Exercícios de Laço de Repetição

// Nível Básico

// 1) Contagem de 1 a 10:



 for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2) Tabuada de um número:
const tabuada = Number(prompt("Qual numero deseja saber a tabuada?: "))
let resultado = null;

for (let i = 1; i <= 10; i++) {
    resultado = tabuada * i;
    console.log(tabuada + " x " + i + " = " + resultado)
}

// 3) Soma dos primeiros N números naturais:

const n = Number(prompt("Informe o numero: "))
let soma = 0;
let texto = "";

for (let i = 1; i <= n; i++) {
    soma += i;
    if (i < n) {
        texto += i + " + ";
    } else {
        texto += i + " = ";
    }
}
console.log(texto + soma);

// Nível Intermediário
// 1) Exibir os números pares de 1 a 50:

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2) Jogo de adivinhação

let aleatorio = Math.floor(Math.random() * 100) + 1;
let chute = 0;

while (chute !== aleatorio) {
    chute = Number(prompt("adivinhe o numero entre 1 e 100: "));
    if (chute < aleatorio) {
        console.log("Muito baixo! Tente novamente.");
    } else if (chute > aleatorio) {
        console.log("Muito alto! Tente novamente.");
    }
    else {
        console.log("Numero correto! Parabéns!");
    }
}

// 3) Contagem regressiva:

let numero = Number(prompt("Informe um numero para a contagem regressiva: "));

while (numero >= 0) {
    console.log(numero);
    numero--;
}

// Nivel Avançado

// 1) Soma dos digitos de um número:
let numeroPositivo = Number(prompt("Digite um número inteiro positivo: "));
let soma2 = 0;

while (numeroPositivo > 0) {
    let digito = numeroPositivo % 10; // pega último dígito
    soma2 += digito;// soma
    numeroPositivo = Math.floor(numeroPositivo / 10); // remove último dígito
}
console.log("Soma dos dígitos:", soma2);
// achei muito divertido fazer esse!

// 2) Fatorial de um número:

let numeroFatorial = Number(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = numeroFatorial; i > 0; i--) {
    fatorial = fatorial * i;
    if (numeroFatorial < 0) {
        console.log("Fatorial não existe para números negativos.");
    }
}
console.log("Fatorial de " + numeroFatorial + " é: " + fatorial);


// 3) Inverter um número:
let numeroInvertido = Number(prompt("Digite um número: "));
let invertido = 0;

while (numeroInvertido > 0) {
    let ultimoDigito = numeroInvertido % 10;
    invertido = invertido * 10 + ultimoDigito;
    numeroInvertido = Math.floor(numeroInvertido / 10);
}
console.log("Número invertido:", invertido);

// 4) Números perfeitos de 1 a 1000:

for (let numero = 1; numero <= 1000; numero++) {

    let soma = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }

    if (soma === numero) {
        console.log(numero);
    }
}
// nao entendi muito bem esse, mas achei interessante!