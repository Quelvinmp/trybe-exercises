// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//   }
//   imprimeIdade()         // Requisito 1


//   // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//   let pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa = {
//     nome: 'Luna',
//     idade: 19
//   } // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);          // Requisito 2


// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);           // Requisito 3


// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${name} ${lastName}!`);
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);          // Requisito 4


// function numeroAleatorio() {
//    return Math.random()
//  }
//  console.log(numeroAleatorio());

// let numeroAleatorio = () => Math.random();
// console.log(numeroAleatorio());         // Requisito 5


// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
// //   console.log(hello(nome));

// let nome = 'Quelvin';
// let saudacaoNome = (nome) => `Olá, ${nome}!`;
// console.log(saudacaoNome(nome));            // Requisito 6


// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

// let nome = 'Quelvin';
// let sobrenome = 'Machado';
// let completeName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(completeName(nome, sobrenome));         // Requisito 7


// let speed = 90;
// const speedCar = (speed) => {
//     if (speed >= 120) {
//         return `Você ultrapassou o limite de velocidade`;
//     } else {
//         return `Você está na velocidade permitida`;
//     }
// };
// console.log(speedCar(speed));

// let speed = 121;
// const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;           // Requisito 8
// console.log(speedCar(speed));