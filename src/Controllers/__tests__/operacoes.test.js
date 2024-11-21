const operacoes = require('../operacoesController')

test('1+2 o resultado será 3', ()=>{
    const resultado = 3;
    expect(operacoes.soma(1, 2)).toBe(resultado)
})

test('1+2 o resultado será 3', ()=>{
    const resultado = 8;
    expect(operacoes.sub(10, 2)).toBe(resultado)
})

test('1+2 o resultado será 3', ()=>{
    const resultado = 20;
    expect(operacoes.mult(10, 2)).toBe(resultado)
})

test('1+2 o resultado será 3', ()=>{
    const resultado = 5;
    expect(operacoes.div(10, 2)).toBe(resultado)
})













