document.getElementById("btDecrescer").addEventListener("click", decrescer);

function decrescer() {
    var inNumero = Number(document.getElementById("inNumero").value);
    var outResposta = document.getElementById("outResposta");

    if (inNumero == 0 || isNaN(inNumero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    if (inNumero <= 1) {
        outResposta.textContent = "Digite um número maior que 1.";
        return;
    }

    var resposta = "Entre " + inNumero + " e 1: ";

    for (let contador = inNumero; contador >= 1; contador--) {
        resposta += contador + " ";
    }

    outResposta.textContent = resposta.trim();
}
