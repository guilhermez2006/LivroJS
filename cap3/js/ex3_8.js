var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);

function verificarVelocidade() {
    var inPermitida = Number(document.getElementById("inPermitida").value);
    var inCondutor = Number(document.getElementById("inCondutor").value);
    var outSituacao = document.getElementById("outSituacao");

    // Validação dos dados
    if (!inPermitida || !inCondutor || isNaN(inPermitida) || isNaN(inCondutor)) {
        alert("ERRO! Insira valores válidos.");
        return; // para evitar que o resto do código execute
    }

    // Condutor dentro da velocidade permitida
    if (inCondutor <= inPermitida) {
        outSituacao.textContent = "Sem Multa";
        return;
    }

    // Calcula 20% da velocidade permitida
    let limiteLeve = inPermitida * 1.2; // 120% da velocidade permitida

    // Condutor até 20% acima da velocidade
    if (inCondutor <= limiteLeve) {
        outSituacao.textContent = "Multa Leve";
    } else {
        outSituacao.textContent = "Multa Grave";
    }
}
