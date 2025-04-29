let button = document.getElementById('btCalcularValor')
button.addEventListener("click", CalcularValor)

function CalcularValor() {
    let valorPor15min = parseFloat(document.getElementById('valorPor15min').value);
    let tempoDeUso = Number(document.getElementById('tempoDeUso').value);

    // Calculando o número de blocos de 15 minutos, arredondando para cima
    let blocosDe15Min = Math.ceil(tempoDeUso / 15);

    // Multiplicando pelos blocos para obter o valor total
    let valorTotal = blocosDe15Min * valorPor15min;

    // Exibindo o resultado na página
    document.getElementById('resultado').textContent = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;
}