/* Desafio de Lógica de Programação

Situação Problema

Você é o diretor de tecnologia de uma empresa de suporte técnico corporativo que atende grandes contratos. 
No fechamento do ano fiscal, a diretoria exige um sistema mais rigoroso para avaliar o desempenho dos técnicos, 
pois decisões de bônus elevados, promoções estratégicas e alertas críticos dependem desses dados.

O sistema deve ser capaz de lidar com múltiplas regras simultâneas, validações rígidas e resultados acumulativos. */

const prompt = require("prompt-sync")();

// VARIAVEIS
let tecnicos = Number(prompt("Quantos tecnicos serão avaliados?: "));

// Rgistro tecnicos
let nome = '';
let nivel = null;
let chamados = null;
let nota = null;
let tempo = null;
let reabertos = null;

// indice
let indice = null;

// bonificacao
let bonificacao = 0;

// alerta
let alerta = '';

// verificar numero ser maior que 0 ao registrar
while (tecnicos <= 0) {
    console.log("Digite um numero maior que 0 para seguir!\n");
    tecnicos = Number(prompt("Digite novamente: "));
}

// cadastro tecnicos
for (let i = 0; i < tecnicos; i++) {
    alerta = "";
    console.log(`===== Registrar tecnico ${i + 1}=====`);
    nome = prompt("Digite o nome do técnico: ");
    nivel = Number(prompt("Digite o nível do técnico (1,2,3): "));
    while (nivel < 1 || nivel > 3) {
        console.log("nivel deve ser referente a (1, 2, 3)\n");
        nivel = Number(prompt("Digite o nível do técnico (1,2,3): "));
    }
    chamados = Number(prompt("Digite a quantidade de chamados resolvidos no ano: "));
    nota = Number(prompt("Digite a nota de satisfação dos clientes (1-10): "));
    while (nota < 0 || nota > 10) {
        console.log("nota deve ser referente a (0-10)\n");
        nota = Number(prompt("Digite a nota de satisfação dos clientes (1-10): "));
    }
    tempo = Number(prompt("Digite o Tempo médio de resolução por chamado (em horas): "));
    reabertos = Number(prompt("Digite a quantidade de chamados reabertos no ano: "));
    console.log("================================");


    // calcular indice
    indice = (chamados * 0.3) + (nota * 100 * 0.4) - (tempo * 10 * 0.2) - (reabertos * 5);
    if (indice < 0) {
        indice = 0;
    } else {
        indice = indice;
    }

    // ALERTAS EXTRAS

    // Nota ≥ 9 e tempo acima do limite
    if (nota >= 9 && tempo > 8) {
        alerta += "Nota alta mas tempo acima do limite.\n";
    }

    // Chamados > 1200 e reabertos > 50
    if (chamados > 1200 && reabertos > 50) {
        alerta += "Volume muito alto de chamados com muitos reabertos.\n";
    }

    // Nota = 10 e tempo > 12h
    if (nota === 10 && tempo > 12) {
        alerta += "Nota máxima porém tempo extremamente alto.\n";
    }

    // Índice de desempenho < 300
    if (indice < 300) {
        alerta += "Índice de desempenho crítico.\n";
    }


    // nivel 1
    if (nivel === 1) {
        if ((chamados >= 120 && chamados <= 249) && (nota > 7 && tempo < 8 && reabertos < 15)) {

            bonificacao = 0.10 // 10 %
            console.log(`Bonificacao do tecnico foi de: ${bonificacao}`);
            console.log(`Indice de desempenho foi: ${indice}`);

        } else if ((chamados >= 250 && chamados <= 399) || (nota > 9 && tempo < 6 && reabertos < 10)) {

            bonificacao = 0.25 // 25 %
            console.log(`Bonificacao do tecnico foi de: ${bonificacao}`);
            console.log(`Indice de desempenho foi: ${indice}`);

        } else if (chamados >= 400 && nota > 8) {
            if (tempo > 9 || reabertos > 20) {
                console.log("Tecnico foi promovido para o nivel 2, Parabens pelo desempenho! 🚀\n");
                console.log(`Indice de desempenho foi: ${indice}`);
            }
        } else if (chamados < 60 || nota < 5 || reabertos > 40) {
            console.log("Desempenho ruim, corre risco de desligamento da empresa.");
            console.log(`Indice de desempenho foi: ${indice}`);
        } else {
            console.log("Valor recebido com sucesso.");
            console.log(`Indice de desempenho foi: ${indice}`);
        }
    }

    // --------------------------------------
    // nivel 2
    else if (nivel === 2) {
        if ((chamados >= 350 && chamados <= 499) && (nota > 7 && tempo < 7 && reabertos < 20)) {
            bonificacao = 0.20 // 20 %
            console.log(`Bonificacao do tecnico foi de: ${bonificacao}`);
            console.log(`Indice de desempenho foi: ${indice}`);
        } else if ((chamados >= 500 && chamados <= 799) || (nota > 9 && tempo < 5 && reabertos < 15)) {
            bonificacao = 0.35 // 35 %
            console.log(`Bonificacao do tecnico foi de: ${bonificacao}`);
            console.log(`Indice de desempenho foi: ${indice}`);
        } else if (chamados >= 800 && nota > 8 && tempo < 6) {
            if (tempo > 11 || reabertos > 30) {
                console.log("Tecnico foi promovido para o nivel 3, Parabens pelo desempenho! 🚀\n");
                console.log(`Indice de desempenho foi: ${indice}`);
            }
        } else if (chamados < 200 || nota < 6 || reabertos > 50) {
            console.log("Desempenho ruim, corre risco de desligamento da empresa.");
            console.log(`Indice de desempenho foi: ${indice}`);
        } else {
            console.log("Valor recebido com sucesso.");
            console.log(`Indice de desempenho foi: ${indice}`);
        }
    }

    // nivel 3
    // --------------------------------------
    else if (nivel === 3) {
        if ((chamados >= 650 && chamados <= 999) && (nota > 7 && tempo < 6 && reabertos < 25)) {
            bonificacao = 0.25 // 25 %
            console.log(`Bonificacao do tecnico foi de: ${bonificacao}`);
            console.log(`Indice de desempenho foi: ${indice}`);
        } else if ((chamados >= 1000 && chamados <= 1599) || (nota > 9 && tempo < 4 && reabertos < 20)) {
            bonificacao = 0.45 // 45 %
            console.log(`Bonificacao do tecnico foi de: ${bonificacao}`);
            console.log(`Indice de desempenho foi: ${indice}`);
        } else if (chamados >= 1600 && nota > 8 && tempo < 5) {
            if (nota < 7 || reabertos > 35) {
                console.log("Tecnico acaba de se tornar Elegível a sócio da empresa, Parabens pelo desempenho! 🚀\n");
                console.log(`Indice de desempenho foi: ${indice}`);
            }
        } else if (chamados <= 450 || nota < 6 || reabertos > 60) {
            console.log("Desempenho ruim, corre risco de desligamento da empresa.");
            console.log(`Indice de desempenho foi: ${indice}`);
        } else {
            console.log("Valor recebido com sucesso.");
            console.log(`Indice de desempenho foi: ${indice}`);
        }
    }

    // else raiz do if
    else {
        console.log("Nivel nao identificado, ou nao correspondente.");
    }

    if (alerta !== "") {
        console.log("\n===== ALERTAS DO TECNICO =====");
        console.log(alerta);
    }
}

