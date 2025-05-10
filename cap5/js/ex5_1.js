document.getElementById("btAdicionar").addEventListener("click", adicionarPaciente);
document.getElementById("btUrgencia").addEventListener("click", adicionarUrgencia);
document.getElementById("btAtender").addEventListener("click", atenderPaciente);

let outAtendimento = document.getElementById('outAtendimento');
let lista = document.getElementById("outLista");
let pacientes = [];

function adicionarPaciente() {
    let nome = document.getElementById("inPaciente").value;
    if (nome === "") {
        alert("Informe o nome do paciente!");
        return;
    }
    pacientes.push(nome);
    atualizarLista();
}

function adicionarUrgencia() {
    let nome = document.getElementById("inPaciente").value;
    if (nome === "") {
        alert("Informe o nome do paciente com urgência!");
        return;
    }
    pacientes.unshift(nome);
    atualizarLista();
    let listaItems = lista.querySelectorAll("li");
    for (let i = 0; i < listaItems.length; i++) {
        if (listaItems[i].textContent.includes(nome)) {
            listaItems[i].style.color = "red";
            break;
        }
    }
}

function atenderPaciente() {
    if (pacientes.length === 0) {
        alert("Não há pacientes na lista!");
        return;
    }
    outAtendimento.textContent = pacientes[0];
    pacientes.shift();
    atualizarLista();
}

function atualizarLista() {
    lista.innerHTML = "";
    for (let i = 0; i < pacientes.length; i++) {
        let li = document.createElement("li");
        li.textContent = (i + 1) + ". " + pacientes[i];
        lista.appendChild(li);
    }
}
