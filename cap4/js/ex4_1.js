document.getElementById("btMostrar").addEventListener("click", mostrarTabuada);

function mostrarTabuada() {
    var inNumero = Number(document.getElementById("inNumero").value);
    var outTabuada = document.getElementById("outTabuada");
    let tabuada = "";

    if (inNumero == 0 || isNaN(inNumero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    for (let contador = 1; contador <= 10; contador++) {
        tabuada += `${inNumero} x ${contador} = ${inNumero * contador}\n`;
    }

    outTabuada.textContent = tabuada;
}
