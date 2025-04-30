let botao = document.getElementById("btCalcular");
botao.addEventListener("click", calcularPeso);

function calcularPeso() {
    var nome = document.getElementById("inNome").value;
    var masculino = document.getElementById("rbMasculino").checked;
    var feminino = document.getElementById("rbFeminino").checked;
    var altura = Number(document.getElementById("inAltura").value);
    var outResposta = document.getElementById("outResposta");

    // Validação dos dados
    if (nome == "" || (!masculino && !feminino)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        return;
    }

    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        return;
    }

    // Cálculo do peso ideal
    var peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

    // Exibe o resultado
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}

function limparCampos() {
    // Limpa os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);