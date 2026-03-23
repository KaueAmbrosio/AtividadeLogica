console.log("=== EXEMPLO DE FIND===");

let numeros = [10, 20, 30, 40, 50];

// Queremos encontrar o primeiro numero maior que 25
let encontrado = numeros.find(numero =>{
    return numero > 25
});

console.log("Numero encontrado:", encontrado);

// Exemplo com objetos

let alunos = [
    {id: 1, nome: "Gabriel", nota:6},
    {id: 2,nome: "Kaue", nota:10},
    {id: 3,nome: "Caua", nota:1}
]

let alunoEncontrado = alunos.find(aluno =>{
    return aluno.id === 2;
});

console.log("Aluno encontrado:", alunoEncontrado);
