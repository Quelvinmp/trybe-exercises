const { mapString, encode, decode } = require('./script');

test('Espera que encode e decode sejam funções', () => {
    expect(typeof encode && typeof decode).toBe('function')
});

test('Espera que a função encode quando inseridas as vogais "aeiou" sejam convertidas em "12345" respectivamente', () => {
    expect(encode('aeiou')).toBe('12345')
});

test('Espera que a função decode quando inseridos os números "12345" sejam convertidos em "aeiou" respectivamente', () => {
    expect(decode('12345')).toBe('aeiou')
});

test('Espera que a função encode quando inseridas consoantes retorne as mesmas consoantes', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz')
});

test('Espera que a função decode quando inseridos os números "6789" permaneçam "6789"', () => {
    expect(decode('6789')).toBe('6789')
});

test('Espera que a função decode quando inserido o parâmetro "uva" retorne um valor com o mesmo .length', () => {
    expect(decode('uva')).toHaveLength(3);
});

test('Espera que a função encode quando inserido o parâmetro "frango" retorne um valor com o mesmo .length', () => {
    expect(encode('frango')).toHaveLength(6);
});