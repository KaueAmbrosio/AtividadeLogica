anoAtual = 2026

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-cadastro");
    formulario.addEventListener("submit", calcularIdade);
    carregarUsuarios();
});

function calcularIdade(event) {
    event.preventDefault();

    const dadosUsuario = pegarValores();

    const DiferencaMes = calcularDiferencaMes(
        dadosUsuario.mes
    );

    const classificacao = classificarAniversario(DiferencaMes);

    const dataNacsimento = DefinarDataNascimento(
        dadosUsuario.dia,
        dadosUsuario.mes,
        dadosUsuario.ano
    );


    const idade = DefinirIdade(dadosUsuario.ano);

    const usuarioFinal = organizarDados(
        dadosUsuario,
        DiferencaMes,
        classificacao,
        dataNacsimento,
        idade
    );

    cadastrarUsuario(usuarioFinal);
    carregarUsuarios();

    document.getElementById("form-cadastro").reset();
}

function pegarValores() {
    const nome = document.getElementById("nome").value.trim();
    const dia = parseInt(document.getElementById("dia-nascimento").value);
    const mes = parseInt(document.getElementById("mes-nascimento").value);
    const ano = parseInt(document.getElementById("ano-nascimento").value);


    return {
        nome: nome,
        dia: dia,
        mes: mes,
        ano: ano
    };
}

function DefinarDataNascimento(dia, mes, ano) {
    return `${dia}/${mes}/${ano}`;
}

function DefinirIdade(ano) {
    return anoAtual - ano;

}

function calcularDiferencaMes(mes) {
    return mesAtual = mes - 2
}


function classificarAniversario(niver) {
    if (niver === 0) return "Voce faz aniversario este mes!";
    if (niver > 0) return "Faltam", mesAtual, "para seu anoversario.";
    if (niver < 0) return "Voce ja fez aniversario.";
}

function organizarDados(dadosUsuario, niver, classificacao, dataNacsimento, idade) {
    const dataAtual = new Date().toLocaleString("pt-BR");

    return {
        ...dadosUsuario,
        dataNacsimento: dataNacsimento,
        idade: idade,
        niver: niver,
        classificacao: classificacao,
        dataCadastro: dataAtual
    };
}


function cadastrarUsuario(usuario) {
    let lista = [];
    const dadosSalvos = localStorage.getItem("usuariosCadastrados");

    if (dadosSalvos) {
        lista = JSON.parse(dadosSalvos);
    }

    lista.push(usuario);

    localStorage.setItem(
        "usuariosCadastrados",
        JSON.stringify(lista)
    );
}

function carregarUsuarios() {
    const tabela = document.getElementById("corpo-tabela");
    const dadosSalvos = localStorage.getItem("usuariosCadastrados");

    let lista = dadosSalvos ? JSON.parse(dadosSalvos) : [];

    if (lista.length === 0) {
        tabela.innerHTML = `
            <tr class="linha-mensagem">
                <td colspan="6">Nenhum registro encontrado!</td>
            </tr>
        `;
        return;
    }

    montarTabela(lista);
}

function montarTabela(lista) {
    const tabela = document.getElementById("corpo-tabela");
    let linhas = "";

    lista.forEach(function (pessoa) {
        linhas += `
        <tr>
            <td data-cell="Nome">${pessoa.nome}</td>
            <td data-cell="DataNascimento">${pessoa.dataNacsimento}</td>
            <td data-cell="Idade">${pessoa.idade}</td>
            <td data-cell="Classificação">${pessoa.classificacao}</td>
            <td data-cell="Data">${pessoa.dataCadastro}</td>
        </tr>
        `;
    });

    tabela.innerHTML = linhas;
}

function deletarRegistros() {
    if (confirm("Deseja Realmente apagar todo o historico?")) {
        localStorage.removeItem("usuariosCadastrados");
        carregarUsuarios();
    }
}