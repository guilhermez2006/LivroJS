document.querySelector("button").addEventListener("click", mostrarPrevisao);

function mostrarPrevisao() {
    let numChinchilas = parseInt(document.getElementById("numChinchilas").value);
    let numAnos = parseInt(document.getElementById("numAnos").value);
    let outResultado = document.getElementById("outResultado");
    let resultado = ""
    if (isNaN(numChinchilas) || isNaN(numAnos) || numChinchilas === 0 || numAnos === 0) {
        alert("Digite um número válido");
        return;
    }

    for (let contador = 1; contador <= numAnos; contador++) {
        resultado += `${contador}º ano: ${numChinchilas} Chinchilas\n`;
        numChinchilas *= 3
    }

    outResultado.textContent = resultado
}