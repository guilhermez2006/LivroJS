let numeros = [];

function exibirNumeros() {
    for (let contador = 1; contador <= 10; contador++) {
        let numero = Number(prompt("Digite o " + contador + "º número Inteiro: "));

        if (isNaN(numero) || numero === 0) {
            alert("Digite um número inteiro válido");
            contador--; // Decrementa contador para repetir a entrada
        } else {
            numeros.push(numero); // Adiciona o número à lista
        }

        if (numero % 2 === 0) {
            alert("Número Par: " + numero);
        } else {
            alert("Número Ímpar: " + numero);
        }
    }

    // Exibe a lista completa
    alert("Todos os números digitados: " + numeros.join(", "));
}