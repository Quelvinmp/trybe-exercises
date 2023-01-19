const myFizzBuzz = require('./script')

test('Espera que o número 15 return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
});

test('Espera que o número 9 return "fizz"', () => {
    expect(myFizzBuzz(9)).toBe("fizz");
});

test('Espera que o número 20 return "buzz"', () => {
    expect(myFizzBuzz(20)).toBe("buzz");
});

test('Espera que o número 20 return "buzz"', () => {
    expect(myFizzBuzz(7)).toBe(7);
});

test('Espera que o número 20 return "buzz"', () => {
    expect(myFizzBuzz('teste')).toBe(false);
});