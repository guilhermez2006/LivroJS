const produtos = []; // Vetor para armazenar os produtos

function adicionarProduto() {
    const nome = prompt("Digite o nome do produto:");
    const preco = Number(prompt("Digite o preço do produto:"));

    if (nome === "" || isNaN(preco) || preco <= 0) {
        console.log("❌ Dados inválidos. Produto não cadastrado.");
        return;
    }

    produtos.push({ nome: nome, preco: preco });
    console.log(`✅ Produto "${nome}" cadastrado com sucesso!`);
}

function listarProdutos() {
    if (produtos.length === 0) {
        console.log("📦 Nenhum produto cadastrado.");
        return;
    }

    console.log("🛍️ Lista de produtos cadastrados:");
    console.log("-------------------------------");

    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });

    console.log("-------------------------------");
}

function filtrarPorPreco() {
    const max = Number(prompt("Mostrar produtos até que valor?"));

    if (isNaN(max) || max <= 0) {
        console.log("❌ Valor inválido.");
        return;
    }

    const filtrados = produtos.filter(produto => produto.preco <= max);

    if (filtrados.length === 0) {
        console.log(`❌ Nenhum produto encontrado até R$ ${max.toFixed(2)}`);
    } else {
        console.log(`🛍️ Produtos até R$ ${max.toFixed(2)}:`);
        console.log("-------------------------------");

        filtrados.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
        });

        console.log("-------------------------------");
    }
}

function menu() {
    let opcao;

    do {
        opcao = prompt(
            "📋 Menu de Produtos:\n" +
            "1 - Adicionar Produto\n" +
            "2 - Listar Produtos\n" +
            "3 - Filtrar por Preço\n" +
            "4 - Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                adicionarProduto();
                break;
            case "2":
                listarProdutos();
                break;
            case "3":
                filtrarPorPreco();
                break;
            case "4":
                console.log("👋 Encerrando o programa...");
                break;
            default:
                console.log("❌ Opção inválida.");
        }
    } while (opcao !== "4");
}

menu();
