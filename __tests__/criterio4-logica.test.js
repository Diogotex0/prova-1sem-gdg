/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Critério 4: Funcionalidade do JS', () => {
    beforeEach(() => {
        jest.resetModules(); // Vital para zerar as variáveis a cada teste
        document.documentElement.innerHTML = html.toString();
        require('../main.js');
    });

    test('Deve adicionar tarefas, atualizar contadores, concluir e remover', () => {
        const inputTarefa = document.getElementById('nova-tarefa');
        const btnAdicionar = document.getElementById('btn-adicionar');
        const lista = document.getElementById('lista-tarefas');
        const contPendentes = document.getElementById('contador-pendentes');
        const contConcluidas = document.getElementById('contador-concluidas');

        // 1. Adicionar Tarefa
        inputTarefa.value = 'Comprar crachás para o GDG';
        btnAdicionar.click();

        // Verifica se entrou na lista e se há 1 pendente
        expect(lista.children.length).toBe(1);
        expect(contPendentes.textContent).toContain('1');
        expect(contConcluidas.textContent).toContain('0');

        // 2. Concluir Tarefa
        const btnConcluir = document.querySelector('.btn-concluir');
        if (btnConcluir) btnConcluir.click();

        // Verifica se a pendente caiu para 0 e a concluída subiu para 1
        expect(contPendentes.textContent).toContain('0');
        expect(contConcluidas.textContent).toContain('1');

        // 3. Remover Tarefa
        const btnRemover = document.querySelector('.btn-remover');
        if (btnRemover) btnRemover.click();

        // Verifica se a lista ficou vazia
        expect(lista.children.length).toBe(0);
    });
});