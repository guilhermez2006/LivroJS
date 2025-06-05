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
        let encontrado = false;

        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].nome === alunoRemover) {
                this.alunos.splice(i, 1);
                alert(`O aluno ${alunoRemover} foi removido da turma!`);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
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
