/* 
Desafio de Lógica de Programação - Coding Dojo
Situação Problema

Você é o diretor de tecnologia de uma empresa que presta serviços de Recursos Humanos. 
E devido a época do ano é necessário avaliar o desempenho de cada vendedor
para calcular suas bonificações.
*/

const prompt = require("prompt-sync")();

let nome = prompt("Insira seu nome:  ");
let nivel = Number(prompt("Digite seu nivel de vendedor (1, 2, 3): "))
let venda = Number(prompt("Informe o valor da sua venda: "));


let bonificacao = 0;

if (nivel === 1) {
    if(venda >= 20000 && venda <= 49999){
        bonificacao = venda * 0.20;
        console.log(`O vendedor ${nome}, nível ${nivel}, deverá receber um bonificação de R$${bonificacao}.`);
    }
    else if(venda >= 50000 && venda <= 79999){
        bonificacao = venda * 0.35;
        console.log(`O vendedor ${nome}, nível ${nivel}, deverá receber um bonificação de R$${bonificacao}.`);
    }
    else if(venda >= 80000){
        console.log(`O vendedor ${nome}, nível 1 foi promovido ao nível 2.`);
    }
    else if(venda < 5000){
        console.log(`O vendedor ${nome}, nível 1, está em risco de demissão.`);
    }
    else{
        console.log("Valor recebido com sucesso.");
    }
}
else if (nivel === 2) {
    if(venda >= 90000 && venda <= 119999){
        bonificacao = venda * 0.25;
        console.log(`O vendedor ${nome}, nível ${nivel}, deverá receber um bonificação de R$${bonificacao}.`);
    }
    else if(venda >= 120000 && venda <= 199999){
        bonificacao = venda * 0.40;
        console.log(`O vendedor ${nome}, nível ${nivel}, deverá receber um bonificação de R$${bonificacao}.`);
    }
    else if(venda >= 200000){
        console.log(`O vendedor ${nome}, nível 2 foi promovido ao nível 3.`);
    }
    else if(venda < 50000){
        console.log(`O vendedor ${nome}, nível 2, está em risco de retrosceder ano nivel 1.`);
    }
    else{
        console.log("Valor recebido com sucesso.");
    }
}
else if (nivel === 3) {
    if(venda >= 210000 && venda <= 249999){
        bonificacao = venda * 0.30;
        cconsole.log(`O vendedor ${nome}, nível ${nivel}, deverá receber um bonificação de R$${bonificacao}.`);
    }
    else if(venda >= 250000 && venda <= 499999){
        bonificacao = venda * 0.45;
        console.log(`O vendedor ${nome}, nível ${nivel}, deverá receber um bonificação de R$${bonificacao}.`);
    }
    else if(venda >= 500000){
        console.log(`O vendedor ${nome}, nível 3, virou o dono da firma!`);
    }
    else if(venda < 100000){
        console.log(`O vendedor ${nome}, nível 3, está em risco de retrosceder ano nivel 2.`);
    }
    else{
        console.log("Valor recebido com sucesso.");
    }
}
else {
    console.log("Algum dos dados inseridos nao foi reconhecido, portanto nao foi possivel achar o usuario.");
}