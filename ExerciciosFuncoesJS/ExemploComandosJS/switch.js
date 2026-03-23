console.log("=== EXEMPLO DE SWITCH CASE ===");

const prompt = require("prompt-sync")();

let dia = prompt(
    "Digite um numero de 1 a 7 para representar o dia da semana: \n"+
    "1 - Domingo\n"+
    "2 - Segunda-feira\n"+
    "3 - Terça-feira\n"+
    "4 - Quarta-feira\n"+
    "5 - Quinta-feira\n"+
    "6 - Sexta-feira\n"+
    "7 - Sabado\n"
);

dia = Number(dia)

switch (dia) {
    case 1:
        console.log("Domingo");
        break
    case 2:
        console.log("Segunda-feira");
        break
    case 3:
        console.log("Terça-feira");
        break
    case 4:
        console.log("Quarta-feira");
        break
    case 5:
        console.log("Quinta-feira");
        break
    case 6:
        console.log("Sexta-feira");
        break
    case 7:
        console.log("Sabado");
        break

        default:
            console.log("Dia invalido!");
}


