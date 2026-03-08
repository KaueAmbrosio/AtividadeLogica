// EXERCICIO 1 Verificar maioridade:
const idade = Number(prompt("Informe sua idade: "));
if (idade < 18) {
    alert("E necessario ser maior de idade para acesssar.");
}
else {
    alert("Usuario maior de idade, Acesso permitido.");
}

// EXERCICIO 2 Verificar se um número é positivo ou negativo:
const num = Number(prompt("Informe um numero para saber se e positivo ou negativo: "));
if (num > 0) {
    alert("Numero positivo!");
}
else {
    alert("Numero Negativo!");
}

// EXERCICIO 3 Aprovação em uma prova:
const nota = Number(prompt("Nota do aluno: "));
if (nota >= 60) {
    alert("Aprovado");
}
else {
    alert("Reprovado");
}

// EXERCICIO 4 Verificar se um número é positivo, negativo ou zero:
const numPNZ = Number(prompt("Informe um numero para saber se e -/+ ou 0: "));
if (numPNZ > 0) {
    alert("Numero positivo!");
}
else if (numPNZ === 0) {
    alert("O numero digitado e 0");
}
else {
    alert("Numero negativo");
}

// EXERCICIO 5 Classificação de idade:
const idade2 = Number(prompt("Informe sua idade: "));

if (idade >= 0 && idade2 <= 12) {
    alert("Criança (0-12)");
}
else if (idade >= 13 && idade <= 17) {
    alert("Adolescente (13-17)");
}
else {
    alert("Adulto (18+).");
}

// EXERCICIO 6 Verificar se um número é par ou ímpar:
const ParOrImpar = Number(prompt("Informe um numero: "));
if (ParOrImpar / 2 % 0) {
    alert("Numero Par");
} else {
    alert("Numero Impar");
}

// Nível Intermediário

// Calculadora simples:
const num1 = Number(prompt("Digite o primeiro numero: "));
const num2 = Number(prompt("Digite o Segundo numero: "));
const op = prompt("Digite a operação(+, -, *, /): ");

let resultado;

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Erro: Digite apenas numeros validos!");
} else if (op === "+") {
    resultado = num1 + num2;
    alert("Resultado da soma: " + resultado);
} else if (op === "-") {
    resultado = num1 - num2;
    alert("Resultado da subtracao: " + resultado);
} else if (op === "*") {
    resultado = num1 * num2;
    alert("Resultado da multiplicacao: " + resultado);
} else if (op === "/") {
    resultado = num1 / num2;
    alert("Resultado da divisao: " + resultado);
} else {
    alert("Valor nao correspondido");
}

// Maior entre três números:
const nMaior1 = Number(prompt("Digite o primeiro numero: "));
const nMaior2 = Number(prompt("Digite o segundo numero: "));
const nMaior3 = Number(prompt("Digite o terceiro numero: "));

if (nMaior1 > nMaior2 && nMaior1 > nMaior3) {
    alert(nMaior1 + " E o maior numero digitado");
}
else if (nMaior2 > nMaior1 && nMaior2 > nMaior3) {
    alert(nMaior2 + " E o maior numero digitado");
}
else if (nMaior3 > nMaior1 && nMaior3 > nMaior2) {
    alert(nMaior3 + " E o maior numero digitado");
} else {
    alert("Um dos numeros digitados nao foi reconhecido.");
}

// Desconto em compras:
const valor = Number(prompt("Informe o valor da compra: "));
let desconto;
let desconto1;
let resto;

if (valor >= 100) {
    desconto = valor / 10;
    desconto1 = valor - (valor / 10);
    alert("Desconto: " + desconto);
    alert("O valor atingiu a quantidade minima do desconto! Valor promocional: " + desconto1);
}
else if (valor < 100) {
    resto = 100 - valor;
    alert("Voce nao atingiu o desconto por: " + resto + ". Portanto o valor é: " + valor);
}
else {
    alert("Valor nao identificado");
}

// Sistema de login simples:
const user = prompt("Digite o usuario: ")
const senha = Number(prompt("Digite a senha: "));

if (user === "admin" && senha == "1234") {
    alert("Acesso consedido com sucesso!");
}
else {
    alert("Acesso negado!")
}

// Nível Avançado

// Classificação de triângulos:
const A = Number(prompt("Digite o primeiro lado: "));
const B = Number(prompt("Digite o segundo lado: "));
const C = Number(prompt("Digite o terceiro lado: "));

if (A < B + C && B < A + C && C < A + B) {
    alert("Voce formou um triangulo! ele foi considerado como:")
    if (A === B && A === C) {
        alert("equilátero tem 3 lados iguais")
    }
    else if (A === B || A === C) {
        alert("isósceles tem pelo menos 2 lados iguais")
    }
    else if (A != B && A != C) {
        alert(" escaleno tem todos os lados diferentes. ")
    }
    else {
        alert("Operacao nao correspondida")
    }
}
else {
    alert("Nao foi possivel identificar o triangulo.")
}

//Conversão de notas para conceitos:
const conceito = Number(prompt("Nota do aluno: "));
if (conceito >= 90 && conceito <= 100) {
    alert("nota: A!");
}
else if (conceito >= 80 && conceito <= 89) {
    alert("nota: B!");
}
else if (conceito >= 70 && conceito <= 79) {
    alert("nota: C!");
}
else if (conceito >= 60 && conceito <= 69) {
    alert("nota: D!");
}
else {
    alert("F");
}

// Cálculo de IMC:
const peso = Number(prompt("Informe seu peso: "));
const altura = Number(prompt("Informe sua altura: "));

let imc = peso / (altura * altura);

if (imc <= 18.5) {
    alert("abaixo do peso");
}
else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal.");
}
else if (imc >= 24.9 && imc <= 29.9) {
    alert("Sobrepeso.");
}
else if (imc >= 30) {
    alert("Obesidade.");
}
else {
    alert("Valor nao reconhecido.");
}

// Validação de ano bissexto:
const ano = Number(prompt("Informe um ano: "))

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
    alert("Ano bissexto.");
}
else {
    alert("O ano informado nao foi bissexto.");
}