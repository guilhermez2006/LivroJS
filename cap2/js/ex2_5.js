let botao = document.getElementById('buttonPromocao');
botao.addEventListener("click", mostrarPromocao);

function mostrarPromocao() {
    let medicamento = document.getElementById('Medicamento').value;
    let preco = parseFloat(document.getElementById('preco').value); // Converter para número

    // Calcula o valor total para duas unidades
    let promocao = preco * 2;

    // Extrai os centavos do valor total (parte decimal)
    let centavos = promocao % 1;

    // Subtrai os centavos do valor total para calcular o valor final
    let valorFinal = promocao - centavos;

    let outPromocao = document.getElementById('outPromocao');
    outPromocao.textContent = "Promoção de " + medicamento;

    // Exibe o valor final da promoção
    let outBrinde = document.getElementById('outBrinde');
    outBrinde.textContent = "Leve 2 por apenas R$: " + valorFinal.toFixed(2);
}