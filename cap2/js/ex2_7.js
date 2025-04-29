let botao = document.getElementById('verPromoção'); // Certifique-se de que o ID está correto
botao.addEventListener("click", calcularPromocao);

function calcularPromocao() {
    let produto = document.getElementById('produto').value; // Nome do produto
    let preco = parseFloat(document.getElementById('preco').value); // Preço unitário

    // Cálculo do valor total da promoção (leve 3)
    let promocao = (2 * preco) + (0.5 * preco); // Dois produtos inteiros + metade do terceiro

    // Cálculo do preço do terceiro produto
    let precoTerceiro = 0.5 * preco;

    // Exibir a saída
    let outProduto = document.getElementById('outProduto');
    outProduto.textContent = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;

    let outPromocao = document.getElementById('outPromocao');
    outPromocao.textContent = `O 3º produto custa apenas R$: ${precoTerceiro.toFixed(2)}`;
}