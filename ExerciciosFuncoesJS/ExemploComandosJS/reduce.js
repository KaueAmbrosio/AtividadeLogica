console.log("=== AULA REDUCE ===");

let numeros = [10, 20, 30, 40];
console.log("Array original:", numeros);

//Estrutura do reduce:
/*! 

array.reduce(function(acumulador, elementoAtual){
          return novoValor;

}, valor inicial);

*/ 


let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
},0);

console.log("Soma total:", soma);

let alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Caio", nota: 6},
    {nome: "Arthur", nota: 9}
];

let totalNotas = alunos.reduce((acumulador, aluno)=>{
    return acumulador + aluno.nota;
},0);

let media = totalNotas / alunos.length;
console.log("Média da turma:", media.toFixed(2));

