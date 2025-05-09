document.querySelector("button").addEventListener("click", criarEstrelas);

function criarEstrelas() {
    let numLinhas = parseInt(document.getElementById("numLinhas").value);
    let outResultado = document.getElementById("outResultado");
    let resultado = ""

    if (isNaN(numLinhas) || numLinhas === 0) {
        alert("Digite um número válido");
        return;
    }

    for (let contador = 1; contador <= numLinhas; contador++) {
        let linha = "*".repeat(contador)
        resultado += linha + "\n"
    }

    outResultado.textContent = resultado
}