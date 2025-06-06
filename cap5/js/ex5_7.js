class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        alert(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos!`);
    }
}

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno() {
        const nome = prompt("Digite o nome do aluno:");
        const idade = prompt("Digite a idade do aluno:");
        const aluno = new Aluno(nome, idade);
        this.alunos.push(aluno);
        alert(`Aluno ${nome} adicionado com sucesso!`);
    }

    listarAluno() {
        if (this.alunos.length === 0) {
            alert("Não tem alunos cadastrados na turma!");
        } else {
            const lista = this.alunos.map(aluno => aluno.nome).join(", ");
            alert(`Alunos na turma: ${lista}`);
        }
    }

    removerAluno() {
        const alunoRemover = prompt("Qual aluno deseja remover da turma?");
        const tamanhoAntes = this.alunos.length;

        this.alunos = this.alunos.filter(aluno => aluno.nome !== alunoRemover);

        const tamanhoDepois = this.alunos.length;

        if (tamanhoDepois < tamanhoAntes) {
            alert(`O aluno ${alunoRemover} foi removido da turma!`);
        } else {
            alert(`O aluno ${alunoRemover} não está na turma!`);
        }
    }

    mostrarQuantidade() {
        if (this.alunos.length === 0) {
            alert("Não tem alunos cadastrados na turma!");
        } else {
            alert(`Tem ${this.alunos.length} alunos na turma!`);
        }
    }
}
