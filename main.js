/* Desenvolva a lógica do seu To-Do List aqui.
 Lembre-se:
 1. Ao criar o botão de excluir, adicione a classe: 'btn-remover'
 2. Ao criar o botão/checkbox de concluir, adicione a classe: 'btn-concluir'
 */

// Array global para armazenar as tarefas
var dadosTarefas = [];

// Função para adicionar tarefa
function adicionarTarefa() {
    var novaTarefa = document.getElementById('nova-tarefa').value;

    if (novaTarefa) {
        dadosTarefas.push({ texto: novaTarefa, concluida: false });
        criaLista();
        document.getElementById('nova-tarefa').value = "";
    } else {
        alert("Favor, preencha o campo de tarefa");
    }
}

document.getElementById('btn-adicionar').addEventListener('click', adicionarTarefa);

// Função para criar a lista de tarefas no DOM
function criaLista() {
    var lista = "";
    for (var i = 0; i <= dadosTarefas.length - 1; i++) {
        lista += "<li>" + dadosTarefas[i].texto +
            " <button class='btn-concluir' onclick='concluir(" + i + ")'>Concluir</button>" +
            " <button class='btn-remover' onclick='excluir(" + i + ")'>Remover</button>" +
            "</li>";
    }
    document.getElementById('lista-tarefas').innerHTML = lista;
    atualizarContadores();
}
