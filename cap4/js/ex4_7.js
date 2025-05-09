var outEspacos = document.getElementById("outEspacos");
var arrayDeNumeros = [];

function preencherEspacos() {
    let inNumero = parseInt(document.getElementById("inNumero").value);

    if (isNaN(inNumero) || inNumero === 0) {
        alert("Digite os dados corretamente!");
        inNumero.focus();
        return;
    }

    arrayDeNumeros.push(inNumero);

    // Cria uma variável para armazenar os símbolos
    let simbolos = "";

    for (let contador = 0; contador < inNumero; contador++) {
        // Alterna entre * e - baseado no contador
        if (contador % 2 === 0) {
            simbolos += "*";  // Adiciona * quando contador é par
        } else {
            simbolos += "-";  // Adiciona - quando contador é ímpar
        }
    }

    outEspacos.textContent = simbolos;
}

var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEspacos);
