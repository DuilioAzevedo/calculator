
/*
function calcularSoma() {
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Calcular a soma
    let soma = num1 + num2;

    // Exibir o resultado
    document.getElementById("resultado").textContent = soma;
}

function calcularSub() {
    
    // Obter os valores dos inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    
    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Calcular a subtração
    let sub = num1 - num2;

    // Exibir o resultado
    document.getElementById("resultado").textContent = sub;
} */

function calcular(operacao) {
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

    // Verificar qual operação realizar
    switch (operacao) {
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

    // Exibir o resultado
    document.getElementById("resultado").textContent = resultado;
}