const books = require('./data-base')

const expectedResult = 'Duna';
const smallerName = (books) => {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((obj) => {
    if (obj.name.length < nameBook.length) {
      nameBook = obj.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books));
// console.log();


