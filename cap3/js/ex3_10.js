document.getElementById("btVerificar").addEventListener("click", verificarTriangulo);

function verificarTriangulo() {
    var ladoA = document.getElementById("ladoA");
    var ladoB = document.getElementById("ladoB");
    var ladoC = document.getElementById("ladoC");
    var outResultado1 = document.getElementById("outResultado1");
    var outResultado2 = document.getElementById("outResultado2");

    if (ladoA.value === "" || ladoB.value === "" || ladoC.value === "") {
        outResultado.textContent = "Preencha todos os lados.";
        outResultado2.textContent = "";
        return;
    }

    var a = Number(ladoA.value);
    var b = Number(ladoB.value);
    var c = Number(ladoC.value);

    if (a < b + c && b < a + c && c < a + b) {
        outResultado1.textContent = "Os lados podem formar um triângulo.";

        if (a === b && b === c) {
            outResultado2.textContent = "Tipo: Equilátero";
        } else if (a === b || b === c || a === c) {
            outResultado2.textContent = "Tipo: Isósceles";
        } else {
            outResultado2.textContent = "Tipo: Escaleno";
        }
    } else {
        outResultado1.textContent = "Os lados não formam um triângulo.";
        outResultado2.textContent = "";
    }
}
