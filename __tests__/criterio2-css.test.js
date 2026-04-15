const fs = require('fs');
const path = require('path');

describe('Critério 2: Especificações Técnicas do CSS', () => {
    let cssContent = '';

    beforeAll(() => {
        const cssPath = path.resolve(__dirname, '../style.css');
        if (fs.existsSync(cssPath)) {
            cssContent = fs.readFileSync(cssPath, 'utf8').toLowerCase();
        }
    });

    test('Deve utilizar Flexbox ou Grid no layout', () => {
        const usouLayoutModerno = cssContent.includes('display: flex') || cssContent.includes('display: grid');
        expect(usouLayoutModerno).toBe(true);
    });

    test('Deve possuir interatividade nos botões usando :hover', () => {
        const temHover = cssContent.includes(':hover');
        expect(temHover).toBe(true);
    });
});