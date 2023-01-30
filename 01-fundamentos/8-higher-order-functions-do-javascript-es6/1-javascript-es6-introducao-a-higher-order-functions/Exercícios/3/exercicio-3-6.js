const books = require('./data-base')

const expectedResult = false;

const authorUnique = (books) => {
  let anos = [];
  let anosIguais;

  books.forEach((a) => {
    anos.push(a.author.birthYear)

    console.log(anos.filter((value) => value === a.author.birthYear).length)
    if (anosIguais.)
    anosIguais = anos.filter((value) => value === a.author.birthYear);
    console.log(anosIguais);
  })
  if (anosIguais.length > 1) {
    return false
  }
}

console.log(authorUnique(books));