console.log("=== EXEMPLO DE ARRAY ===");


let frutas = ["Maçã", "Banana", "Uva", "Laranja"];
//* Indices: 
//* "Maçã" -> Posição: 0
//* "Banana" -> Posição: 1
//* "Uva" -> Posição: 2
//* "Laranja" -> Posição: 3

//? Alterando valor de um elemento array
frutas[1] = "Morango";

//? Adiciona elemento a lista
frutas.push("Abacaxi");

//! Remove elemento da lista
//! frutas.pop();

console.log("Lista de Frutas", frutas);
console.log("Primeira Fruta da lista:", frutas[0]);
console.log("Segunda Fruta da lista:", frutas[1]);

console.log(" ");

//? Percorrer array com FOR
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta", i+1, frutas[i]);
}

console.log(" ");

frutas.forEach(function(fruta){
    console.log("Fruta:", fruta);
})