const myRemove = require('./script');

test('Verifica se retorna o array [ 1, 2, 4 ]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
});

test('Verifica se não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
});

test('Verifica se retorna o array [ 1, 2, 3, 4 ]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ])
});