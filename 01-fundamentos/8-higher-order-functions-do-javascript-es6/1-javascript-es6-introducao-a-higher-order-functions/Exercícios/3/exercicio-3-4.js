const books = require('./data-base')

const expectedResult = false;

function everyoneWasBornOnSecXX(books) {
  // escreva seu código aqui
  return books.every((a) => a.author.birthYear < 1901);
}

console.log(everyoneWasBornOnSecXX(books));
