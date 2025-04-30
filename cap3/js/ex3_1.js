let botao = document.getElementById('btMedia')
botao.addEventListener("click", calcularMedia)

function calcularMedia() {
    const nomeAluno = document.getElementById('nomeAluno').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    let outMedia = document.getElementById('outMedia')
    let outSituacao = document.getElementById('outSituacao')

    let media = (nota1 + nota2) / 2;

    outMedia.textContent = "Média das Notas: " + media

    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + nomeAluno + "! Você foi Aprovado(a)"
        outSituacao.style.color = "blue";
    }
    else {
        outSituacao.textContent = nomeAluno + ", infelizmente você foi Reprovado(a)!"
        outSituacao.style.color = "red";
    }
}
