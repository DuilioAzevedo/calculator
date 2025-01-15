let operacaoSelecionada = "";

function selecionarOperacao(operacao) {
    // Guardar a operação selecionada
    operacaoSelecionada = operacao;
}

function calcular() {
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Variável para armazenar o resultado
    let resultado;

    // Verificar qual operação foi selecionada
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
            alert("Por favor, selecione uma operação.");
            return;
    }

    // Exibir o resultado
    document.getElementById("resultado").textContent = resultado;
}