/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Critério 1: Estrutura HTML', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('Deve conter os IDs obrigatórios de input e lista', () => {
        expect(document.getElementById('nova-tarefa')).not.toBeNull();
        expect(document.getElementById('btn-adicionar')).not.toBeNull();
        expect(document.getElementById('lista-tarefas')).not.toBeNull();
    });

    test('Deve conter os IDs obrigatórios dos contadores', () => {
        expect(document.getElementById('contador-pendentes')).not.toBeNull();
        expect(document.getElementById('contador-concluidas')).not.toBeNull();
    });
});