let valorAtual = "0"; // Valor atual exibido na tela
let valorAnterior = null; // Valor armazenado para a operação
let operacaoSelecionada = null; // Operação selecionada (+, -, *, /)

function digitar(numero) {
    if (valorAtual === "0" || operacaoSelecionada && valorAtual === "") {
        valorAtual = numero; // Substitui o valor inicial ou após operação
    } else {
        valorAtual += numero; // Adiciona mais números
    }
    atualizarTela(valorAtual);
}

function selecionarOperacao(operacao) {
    if (valorAtual === "") return;

    if (valorAnterior !== null && operacaoSelecionada) {
        calcular(); // Calcula a operação anterior antes de continuar
    }

    operacaoSelecionada = operacao;
    valorAnterior = valorAtual;
    valorAtual = ""; // Prepara para o próximo número
}

function calcular() {
    if (!operacaoSelecionada || valorAnterior === null || valorAtual === "") return;

    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);

    let resultado;
    switch (operacaoSelecionada) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Não é possível dividir por zero!");
                limpar();
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }

    valorAtual = resultado.toString();
    valorAnterior = null;
    operacaoSelecionada = null;
    atualizarTela(valorAtual);
}

function limpar() {
    valorAtual = "0";
    valorAnterior = null;
    operacaoSelecionada = null;
    atualizarTela(valorAtual);
}

function atualizarTela(valor) {
    document.getElementById("tela").value = valor;
}