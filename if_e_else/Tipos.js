import PromptSync from "prompt-sync"
const prompt = PromptSync();

const num1 = Number(prompt("Digite a primeria nota: "));
const num2 = Number(prompt("Digite a segunda nota: "));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
const mod = num1 % num2;

const usuario = prompt("Digite o usuario: ")
if(usuario === ""){
    console.log("Usuario nao pode ser vazio!");
}else if(usuario === "Adm"){
    console.log("Usuario Valido");
}
 else{
    console.log("Usuario nao encontrado")
 }

 const velocidade = Number(prompt("Velocidade do veiculo (km/h)"))
 if (Number.isNaN(velocidade) || velocidade < 0){
    console.log("Velocidade invalida!")
 }else if(velocidade <= 40)
{
 console.log("Velocidade media");
}
 else if(velocidade <= 80)
{
 console.log("Velocidade alta");
}
