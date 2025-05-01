// Cria a referência ao botão e adiciona o evento 'click' antes de definir a função
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);

function calcularRaiz() {

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value); // Obtém conteúdo do campo

    // Se não preencheu ou Not-a-Number (NaN)
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus(); // Posiciona no campo inNumero
        return; // Retorna
    }

    var raiz = Math.sqrt(numero); // Calcula raiz quadrada do número
    // Se valor da variável raiz igual a este valor arredondado para inteiro
    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz; // Mostra a raiz
    } else {
        // Senão, exibe mensagem indicando que não há raiz exata
        outResposta.textContent = "Não há raiz exata para " + numero;
    }
}
