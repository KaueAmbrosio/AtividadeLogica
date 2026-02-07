// Exercícios de Laço de Repetição

// Nível Básico

// 1) Contagem de 1 a 10:

for(let i = 1; i <= 10; i++)
{
    console.log(i);
}

// 2) Tabuada de um número:
const tabuada= Number(prompt("Qual numero deseja saber a tabuada?: "))
let resultado = null;

for (let i = 1; i <= 10; i++){
    resultado = tabuada * i;
    console.log(tabuada + "x" + i + "=" + resultado)
}

const n = Number(prompt("Informe o numero: "))
let soma = 0
for(let i = 1; i <= n; soma += i && i++){
 console.log(i)
}