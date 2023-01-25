const books = require('./data-base')

const expectedResult = 'Stephen King';
const authorBornIn1947 = (author) => {
  return books.find((a) => a.author.name === author).author.name;
}

console.log(authorBornIn1947(expectedResult));