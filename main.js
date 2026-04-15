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
