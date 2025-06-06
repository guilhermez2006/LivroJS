var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNotas);

function exibirNotas() {

    var inSaque = Number(document.getElementById("inSaque").value);
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    if (inSaque == 0 || isNaN(inSaque)) {
        alert("Informe o valor do saque corretamente"); // exibe alerta
        inSaque.focus(); // posiciona em inSaque
        return;
    }

    // verifica se saque não é múltiplo de 10
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }

    // calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    var notasDez = Math.floor(resto / 10);
    
    // exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de R$ 50: " +
            notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
    }
}
