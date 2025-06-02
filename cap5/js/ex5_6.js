let clubes = [];

// Adiciona clube ao array
function adicionarClube() {
    const input = document.getElementById('inAdicionar');
    if (input.value.trim() === "") {
        alert("Digite um clube!");
        return;
    }
    clubes.push(input.value.trim());
    input.value = "";
}

// Lista todos os clubes
function listarClubes() {
    const output = document.getElementById('clubesList');
    output.textContent = clubes.length > 0 
        ? clubes.map((clube, i) => `${i + 1}. ${clube}`).join('\n') 
        : "Nenhum clube adicionado!";
}

// Gera os confrontos
function montarTabela() {
    const output = document.getElementById('tabelaJogos');
    
    if (clubes.length % 2 !== 0) {
        output.textContent = "Número ímpar de clubes. Adicione mais um.";
        return;
    }

    const jogos = [];
    for (let i = 0; i < clubes.length / 2; i++) {
        jogos.push(`${clubes[i]} x ${clubes[clubes.length - 1 - i]}`);
    }
    
    output.textContent = jogos.join('\n');
}