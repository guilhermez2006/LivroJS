var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarParOuImpar);

function verificarParOuImpar() {
    var inNumero = Number(document.getElementById("inNumero").value);
    var outResposta = document.getElementById("outResposta");

    if(inNumero == 0 || isNaN(inNumero)) {
        alert("Erro, Por favor digite um número!")
        inNumero.focus()
        return;
    }
    if(inNumero % 2 == 0) {
        outResposta.textContent = "Resposta: " + inNumero + " é Par"
    }

else {
    outResposta.textContent = "Resposta: " + inNumero + " é Impar"
}
}
