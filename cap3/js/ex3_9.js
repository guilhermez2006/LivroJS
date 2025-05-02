var btInserir = document.getElementById("btInserir");
btInserir.addEventListener("click", inserirValor);

function inserirValor() {
    var inValor = parseFloat(document.getElementById("inValor").value);
    let resultado = document.getElementById("outResposta");

    if (isNaN(inValor) || inValor <= 0) {
        alert("Erro! Por favor, digite um número válido.");
        document.getElementById("inValor").focus();
        return;
    }

    let tempo = 0;
    let preco = 0;

    if (inValor < 1.00) {
        resultado.textContent = "Valor Insuficiente!";
        return;
    } else if (inValor < 1.75) {
        tempo = 30;
        preco = 1.00;
    } else if (inValor < 3.00) {
        tempo = 60;
        preco = 1.75;
    } else {
        tempo = 120;
        preco = 3.00;
    }

    let troco = inValor - preco;

    resultado.textContent = `Você tem ${tempo} minutos liberados!\nTroco: R$ ${troco.toFixed(2)}`;
}
