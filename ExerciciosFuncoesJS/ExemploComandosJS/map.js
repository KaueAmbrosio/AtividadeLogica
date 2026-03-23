console.log("=== AULA DE MAP ===");

let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);


//? Estrutura do map:

//! Array.map(function(elemento){
//!           return transformacao});

//? map percorre todos os elementos da array
let dobrados = numeros.map(function (numero) {
    return numero * 2;
});

console.log("Array dobrado:", dobrados);

let triplicados = numeros.map(numero => numero * 3)
console.log("Array triplicado:", triplicados);

let alunos = [
    {nome: "Ana", nota:6},
    {nome: "Bruno", nota:10},
    {nome: "Caique", nota:1}
]

let nomes = alunos.map(aluno => {
    return aluno.nome;
});

//* Exibindo novo array
console.log("Somente nomes:", nomes);

let nomess = ["Gabriel", "Caio", "Nicolas"]

//* Retorna um novo arrat como nomes em maisculo
let maiusculos = nomess.map(nome =>{
    return nome.toUpperCase();
});

console.log("nome maisculo:", maiusculos)
