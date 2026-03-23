// DESAFIO - EXERCICIO - SISTEMA DE CARRINHO DE COMPRAS

const carrinho = [
    { id: 1, nome: "Notebook", preco: 3000, quantidade: 1, promocao: true },
    { id: 2, nome: "Mouse", preco: 100, quantidade: 2, promocao: false },
    { id: 3, nome: "Teclado", preco: 200, quantidade: 1, promocao: true },
    { id: 4, nome: "Monitor", preco: 1200, quantidade: 1, promocao: false }
];

// Calcule o valor total do carrinho.
let totalvalores = carrinho.reduce((acumulador, total) => {
    return acumulador + total.preco;
}, 0);
console.log("Valores somados: ", totalvalores);


// Gere um array apenas com os nomes dos produtos em promoção.
let promocaoON = carrinho.filter(function (promo) {
    return promo.promocao === true;
});

console.log("itens em promocao:", promocaoON);

// Encontre o produto com id = 3.
let encontrarID = carrinho.find(numero => {
    return numero.id === 3;
});

console.log("Produto com ID referente:", encontrarID);

// Gere um novo array com o subtotal de cada produto (preço × quantidade).
let subtotal = carrinho.map(precoEquantidade => {
    return precoEquantidade.preco * precoEquantidade.quantidade;
});

console.log("Subtotal da compra:", subtotal)
