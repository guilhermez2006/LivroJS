
let botao = document.getElementById('botao')
botao.addEventListener("click", verPromocao)

function verPromocao() {
    let veiculo = document.getElementById('veiculo').value
    let preco = Number(document.getElementById('preco').value)
    let resultado = document.getElementById('resultado')

    let entrada = preco * 0.50
    let parcela = (preco * 0.50) / 12;

    resultado.innerHTML =
        "Promoção: " + veiculo + "<br>" + 
    "Entrada de R$: " + entrada + "<br>" +
        "12x de R$: " + parcela.toFixed(2)
}