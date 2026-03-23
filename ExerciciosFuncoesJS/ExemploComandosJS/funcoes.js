console.log("=== EXEMPLO DE FUNCOES ===");


function saudacao() {
    console.log("Hello World!");
}
saudacao();


function saudacaoComNome(nome) {
    console.log("Olá, ", nome);
}
saudacaoComNome("Kaue Gabriel");

function somar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = somar(30, 97)
console.log("Resultado da soma:", resultado);


// ARROW FUNCTION

const multiplicar = (a, b) => {
    return a * b;
}

console.log("Multiplicacao", multiplicar(4,3));

