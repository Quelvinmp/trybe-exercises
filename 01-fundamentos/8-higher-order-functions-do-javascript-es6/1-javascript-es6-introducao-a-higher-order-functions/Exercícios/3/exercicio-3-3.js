const books = require('./data-base')

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = (books) => {
  return books.find((book) => book.name.length === 26 && book.name)
}

// console.log(books[0].name.length);
console.log(getNamedBook(books));
