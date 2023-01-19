const myFizzBuzz = require('./script')

test('Espera que o número 15 retorne "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
});

test('Espera que o número 9 retorne "fizz"', () => {
    expect(myFizzBuzz(9)).toBe("fizz");
});

test('Espera que o número 20 retorne "buzz"', () => {
    expect(myFizzBuzz(20)).toBe("buzz");
});

test('Espera que o número 7 retorne 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
});

test('Espera que o a string "teste" retorne "buzz"', () => {
    expect(myFizzBuzz('teste')).toBe(false);
});