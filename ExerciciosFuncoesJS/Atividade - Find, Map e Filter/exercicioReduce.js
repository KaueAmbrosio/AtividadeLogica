// ATIVIDADE - REDUCE

// Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).

const valores = [100, 200, 50, 150];

let totalvalores = valores.reduce((acumulador, total)=>{
    return acumulador + total;
},0);

console.log("Valores somados: ", totalvalores);
