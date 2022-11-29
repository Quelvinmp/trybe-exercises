// Requisito 1

// let geometricForm = '';
// let limit = 5;

// for (let i = 1; i <= limit; i += 1) {
//     for (let i2 = 1; i2 <= limit; i2 += 1) {
//         geometricForm += '*';
//     }
//     console.log(geometricForm);
//     geometricForm = '';
// }


// Requisito 2

// let geometricForm = '';
// let limit = 5;

// for (let i = 1; i <= limit; i += 1) {
//     for (let i2 = 1; i2 <= i; i2 += 1) {
//         geometricForm += '*';
//     }
//     console.log(geometricForm);
//     geometricForm = '';
// }


// Requisito 3

// let geometricForm = '';
// let limit = 5;

// for (let i = 1; i <= limit; i += 1) {
//     while (geometricForm.length +1 <= limit - i) {
//         geometricForm += ' ';
//     }
//     for (let i2 = 1; i2 <= i; i2 += 1) {
//         geometricForm += '*';
//     }
//     console.log(geometricForm);
//     geometricForm = '';
// }


// Requisito 4

// const limit = 5;
// let geometricForm = '';

// for (let i = 1; i <= limit; i += 2) {
//     while (geometricForm.length + 1 <= ((limit - i) / 2).toFixed()) {
//         geometricForm += ' ';
//     }
//     for (let j = 1; j <= i; j += 1) {
//         geometricForm += '*';
//     }
//     while (geometricForm.length + 1 <= limit) {
//         geometricForm += ' ';
//     }
//     console.log(geometricForm);
//     geometricForm = '';
// }

// Gabarito

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };


// Requisito 5 - Gabarito

// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';

// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

// Requisito 6 - Gabarito

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
    if (numberToCheck % number === 0) {
        divisors += 1;
    }
}

if (divisors === 2) {
    console.log(numberToCheck + ' é primo');
} else {
    console.log(numberToCheck + ' não é primo');
}