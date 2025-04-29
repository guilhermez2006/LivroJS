let botao = document.getElementById('btCalcular')
botao.addEventListener("click", calcularPreco)

function calcularPreco() {
    let quilo = parseFloat(document.getElementById('inQuilo').value)
    let consumo = parseFloat(document.getElementById('inConsumo').value)
    let outValor = document.getElementById("outValor")

    var valor = (consumo / 1000) * quilo;


    outValor.textContent = "Valor a pagar R$: " + valor

}