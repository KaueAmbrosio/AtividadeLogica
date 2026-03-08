/*Exercício — Sistema de Pedidos da Cafeteria Interativa
Objetivo:
Criar um programa interativo que simule o atendimento de uma cafeteria, utilizando e em conjunto.
*/

let nome = "";
let bebida = 0;
let acucar = "";
let acompanhamento = "";
let valor = 0;

const prompt = require("prompt-sync")();

console.log("BEM VINDO A CAFETARIA BOM CAFÉ!");
console.log("===== CARDAPIO =====\n 1 - Café Expresso R$6 \n 2 - Cappuccino R$8\n 3 - Pingado R$7\n=====================");


let atendimento = "sim";

while (atendimento === "sim") {
    console.log("===== Atendimento iniciado =====\n");

    nome = prompt("Digite seu nome: ");
    bebida = Number(prompt("Informe o codigo da bebida que voce deseja: "));
    if (bebida === 1) {
        console.log("Café Expresso adicionado ao pedido\n");
        valor = 6;
    }
    if (bebida === 2) {
        console.log("Cappuccino adicionado ao pedido\n");
        valor = 8;
    }
    if (bebida === 3) {
        console.log("Pingado adicionado ao pedido\n");
        valor = 7;
    }

    acucar = prompt(`${nome} deseja adicionar açúcar? (sim) ou (nao): `)
    if (acucar === "sim") {
        console.log("açúcar adicionado ao seu pedido.\n");
    }
    else if (acucar === "nao") {
        console.log("Pedido sem açúcar. \n");
    }
    else {
        console.log("Resposa nao reconhecida.\n");
    }
    acompanhamento = prompt("Deseja Adicionar algum acompanhamento? (sim) ou (nao): ")
    if (acompanhamento === "sim") {
        console.log("===== ACOMPANHAMENTOS =====\n 1 - Pão de Queijo R$8\n 2 - Bolo de Chocolate R$15\n 3 - Biscoito R$5\n============================");
        acompanhamento = prompt("Qual acompanhamento deseja? (1-3): ")
        if (acompanhamento === "1") {
            console.log("Pão de Queijo adiconado ao seu pedido.\n");
            valor = valor + 8;
        }
        else if (acompanhamento === "2") {
            console.log("Bolo de chocolate adiconado ao seu pedido.\n");
            valor = valor + 15;
        }
        else if (acompanhamento === "3") {
            console.log("Biscoito adiconado ao seu pedido.\n");
            valor = valor + 5;
        }
        else {
            console.log("Acompanhamento nao identificado.\n");
        }
    }
    else if (acompanhamento === "nao") {
        console.log("Otimo, iremos seguir com o atendimento.\n");
        valor = valor;
    }
    else {
        console.log("Resposta nao identificada.");
    }
    console.log(`Valor do pedido: R$${valor}`);

    atendimento = prompt("Deseja fazer outro pedido? (sim) ou (nao):")
}
console.log("===== Atendimento encerrado, obrigado pela preferencia =====\n");