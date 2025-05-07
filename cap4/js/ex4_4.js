document.getElementById("btVerificarPrimo").addEventListener("click", verificarPrimo);

function verificarPrimo() {
    var inNumero = Number(document.getElementById("inNumero").value);
    var outResposta = document.getElementById("outResposta");

    if (isNaN(inNumero) || inNumero <= 1) {
        alert("Informe um número inteiro maior que 1.");
        return;
    }

    let ehPrimo = true;

    for (let i = 2; i < inNumero; i++) {
        if (inNumero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        outResposta.textContent = inNumero + " é um número primo!";
    } else {
        outResposta.textContent = inNumero + " não é um número primo!";
    }
}