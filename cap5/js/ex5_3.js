var carros = []; // declara vetor global

function adicionarCarros() {
    // Cria referência aos elementos contendo os dados de entrada
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    var modelo = inModelo.value; // obtém conteúdo dos campos
    var preco = Number(inPreco.value);

    // Verifica preenchimento dos campos
    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Informe corretamente os dados");
        inModelo.focus();
        return;
    }

    // Adiciona dados ao vetor de objetos
    carros.push({ modelo: modelo, preco: preco });

    // Limpa campos e posiciona cursor em inModelo
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros(); // chama função que lista os carros
}

// Cria referência ao btAdicionar e associa função ao evento click deste botão
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros() {
    var outLista = document.getElementById("outLista");
    var lista = "";

    // Percorre todos os carros e exibe
    for (var i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }

    if (lista == "") {
        outLista.textContent = "Nenhum carro cadastrado.";
    } else {
        outLista.textContent = "Carros cadastrados:\n------------------------\n" + lista;
    }
}

function filtrarCarros() {
    // Faz a leitura do valor máximo a partir do método prompt
    var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    // Se não preencheu ou conteúdo inválido ...
    if (maximo == 0 || isNaN(maximo)) {
        return; // ... retorna
    }

    // Para concatenar lista de carros que obedecem ao critério de pesquisa / filtro
    var lista = "";

    // Percorre todos os elementos do vetor
    for (var i = 0; i < carros.length; i++) {
        // Verifica se o preço é inferior (ou igual) ao máximo
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
        }
    }

    var outLista = document.getElementById("outLista"); // Cria referência a outLista

    // Se a lista está vazia, significa que nenhum veículo foi encontrado (no for)
    if (lista == "") {
        outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
    } else {
        // Senão, mostra os veículos obtidos
        outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n------------------------\n" + lista;
    }
}

// Cria referência ao btFiltrar e associa função ao evento click
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);
