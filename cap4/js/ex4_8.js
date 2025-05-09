function repetirFruta() {
  var inFruta = document.getElementById("inFruta").value;
  var inNumero = parseInt(document.getElementById("inNumero").value);
  var outFrutas = document.getElementById("outFrutas");

  if (isNaN(inNumero) || inNumero <= 0 || inFruta.trim() === "") {
    alert("Digite os dados corretamente!");
    return;
  }

  let resultado = "";

  for (let contador = 1; contador <= inNumero; contador++) {
    resultado += inFruta;

    if (contador < inNumero) {
      resultado += " * ";  // Adiciona um espaço entre as frutas
    }
  }

  outFrutas.textContent = resultado;
}

var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);
