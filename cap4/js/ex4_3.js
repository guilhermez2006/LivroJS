// Declara e inicializa contadores e acumuladores (variáveis globais)
var numContas = 0;
var valTotal = 0;

// Variável string que acumula as contas
var resposta = "";

function registrarConta() {
  // Cria referência aos elementos da página
  var inDescricao = document.getElementById("inDescricao");
  var inValor = document.getElementById("inValor");
  var outListaContas = document.getElementById("outListaContas");
  var outTotal = document.getElementById("outTotal");

  // Obtém conteúdo dos campos
  var descricao = inDescricao.value;
  var valor = Number(inValor.value);

  // Verifica preenchimento dos campos
  if (descricao == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente...");
    inDescricao.focus();
    return;
  }

  // Adiciona valores ao contador e acumulador
  numContas++;
  valTotal += valor;

  // Concatena a conta à lista
  resposta += descricao + " - R$: " + valor.toFixed(2) + "\n";

  // Altera o conteúdo das tags de resposta
  outListaContas.textContent = resposta + "-----------------------------";
  outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

  // Limpa campos e posiciona cursor em inDescricao
  inDescricao.value = "";
  inValor.value = "";
  inDescricao.focus();
}

// Referencia o botão e associa a função ao evento click
var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);
