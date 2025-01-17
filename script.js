let operacaoSelecionada = "";
let valorAnterior = "";
let valorAtual = "";

function digitar(numero) {
    const tela = document.getElementById("numero1");

    if (!operacaoSelecionada) {
        valorAnterior += numero;
        tela.value = valorAnterior;
    } else {
        valorAtual += numero;
        tela.value = valorAtual;
    }
}

function selecionarOperacao(operacao) {
    if (valorAnterior === "") {
        alert("Digite um número antes de selecionar a operação.");
        return;
    }
    operacaoSelecionada = operacao;
}

function calcular() {
    if (valorAnterior === "" || valorAtual === "") {
        alert("Por favor, complete a operação.");
        return;
    }

    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);
    let resultado;

    switch (operacaoSelecionada) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById("numero1").value = resultado;
    limpar();
}

function limpar() {
    valorAnterior = "";
    valorAtual = "";
    operacaoSelecionada = "";
    document.getElementById("numero1").value = "0";
}