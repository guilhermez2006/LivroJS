let operacao
let numeros
let num1
let num2
let resultado
let continuar = true;

function calculadora() {
    operacao = prompt(`Digite Qual Operação Deseja Realizar: 
    \n1 Soma (+) 
    \n2 Subtração (-) 
    \n3 Multiplicação (/)
    \n4 Divisão (/)`)

    num1 = Number(prompt("Digite primeiro número:"))
    num2 = Number(prompt("Digite o segundo número"))

    if (operacao !== "1" && operacao !== "2" && operacao !== "3" && operacao !== "4") {
        alert("Digite uma operação válida!");
        return;
    }

    switch (operacao) {
        case "1":
            resultado = num1 + num2
            alert("Resultado da Soma: " + resultado)
            break;

        case "2":
            resultado = num1 - num2
            alert("Resultado da Subtração: " + resultado)
            break;
        case "3":
            resultado = num1 * num2
            alert("Resultado da Multiplicação: " + resultado)
            break;

        case "4":
            resultado = num1 / num2
            alert("Resultado da Divisão: " + resultado)
            break;
    }

}
while (continuar) {
    calculadora();
}