//* ATIVIDADE - FIND

//? 1) Dado o array 
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"]; // encontre o primeiro filme que começa com a letra "B".


let encontrarFilme = filmes.find(filme => filme.startsWith("B"));

console.log("Filme encontrado: ", encontrarFilme)
 
//? 2) Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.

let numeros = [2, 4, 6, 9, 12, 15]

let numeroImpar = numeros.find(impar =>{
    return impar % 2 === 1;
});

console.log("Primeiro numero impar:", numeroImpar);

// 3) Dado o array encontre o primeiro aluno com nota maior ou igual a 7.

const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];

let Notaseven = alunos.find(nota =>{
    return nota.nota >= 7;
});

console.log("Primeiro aluno na lista com nota >= a 7:", Notaseven)