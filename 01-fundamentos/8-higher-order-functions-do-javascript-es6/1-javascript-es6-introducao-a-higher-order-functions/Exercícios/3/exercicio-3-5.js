const books = require('./data-base')

const expectedResult = true;

const someBookWasReleaseOnThe80s = (books) => {
  return books.some((book) => (book.releaseYear >= 1980 && book.releaseYear <= 1989) ? true : false
  )
}
console.log(someBookWasReleaseOnThe80s(books));