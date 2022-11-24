    // Exercício 1

// const a = 10;
// const b = 50;

// let adicao = a + b;
// let subtracao = a- b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

    // Exercício 2

// const a = 30;
// const b = 50;
// let resultado;

// if (a < b) {
//     console.log(resultado = 'a é menor que b');
// } else if (a > b) {
//     console.log(resultado = 'a é maior que b');
// } else if (a == b) {
//     console.log(resultado = 'a é igual a b');
// }

    // Exercício 3

// const a = 30;
// const b = 50;
// const c = 70;
// let resultado;

// if (a > b && a > c) {
//     console.log(resultado = 'a é o maior');
// } else if (b > a && b > c) {
//     console.log(resultado = 'b é o maior');
// } else if (c > a && c > b) {
//     console.log(resultado = 'c é o maior');
// } else {
//     console.log(resultado = 'Não tem maior');
// }

    // Exercício 4

// const num = 0;

// if (num > 0) {
//     console.log('Positive');
// } else if (num < 0) {
//     console.log('Negative');
// } else {
//     console.log('Zero');
// }

    // Exercício 5

// const a = 100;
// const b = 50;
// const c = 30;

// if (a + b + c === 180) {
//     console.log('True');
// } else if (a <= 0 || b <= 0 || c <= 0) {
//     console.log('Erro');
// } else {
//     console.log('False');
// }

    // Exercício 6

// let chess = 'KINGS';

// switch (chess.toLowerCase()) {
//     case 'pawns':
//         console.log('Vertically forward one square, with the option to move two squares if they have not yet moved');
//         break;

//     case 'knights':
//         console.log('In an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
//         break;

//     case 'bishops':
//         console.log('Diagonally any number of squares');
//         break;

//     case 'rooks':
//         console.log('Horizontally or vertically any number of squares');
//         break;

//     case 'queens':
//         console.log('Diagonally, horizontally, or vertically any number of squares');
//         break;

//     case 'kings':
//         console.log('One square in any direction, so long as that square is not attacked by an enemy piece');
//         break;

//     default:
//         console.log('error');
// }

    // Exercício 7

// const nota = 100;

// if (nota >= 90 && nota <= 100) {
//     console.log('A');
// } else if (nota >= 80 && nota < 100) {
//     console.log('B');
// } else if (nota >= 70 && nota < 100) {
//     console.log('C');
// } else if (nota >= 60 && nota < 100) {
//     console.log('D');
// } else if (nota >= 50 && nota < 100) {
//     console.log('E');
// } else if (nota < 50 && nota >= 0) {
//     console.log('F');
// } else {
//     console.log('error');
// }

    // Exercício 8

// const num1 = 5;
// const num2 = 3; 
// const num3 = 10; 

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

    // Exercício 9

// const num1 = 10;
// const num2 = 1; 
// const num3 = 0; 

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

    // Exercício 10

// const productCost = 10;
// const tax = 20/100 * productCost;
// const totalCostValue = productCost + tax;

// const sellPrice = 20;

// let profit;

// if (productCost >= 0 || sellPrice >= 0) {
//     console.log(profit = (sellPrice * 1000) - (totalCostValue * 1000));
// } else {
//     console.log('error');
// }

    // Exercício 11


let aliquotINSS;
let aliquotIR;

const grossSalary = 9000.00;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
} else {
    aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
    aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
    aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
    aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
    aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
    aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
