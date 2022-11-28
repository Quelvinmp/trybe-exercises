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

const limit = 15;
let geometricForm = '';
let leftSpace = '';
let rightSpace = '';
let asterisk = '';

for (let i = 1; i <= limit; i += 2) {
    while (geometricForm.length + 1 <= ((limit - i) / 2).toFixed()) {
        geometricForm += ' ';
    }
    for (let j = 1; j <= i; j += 1) {
        geometricForm += '*';
    }
    while (geometricForm.length + 1 <= limit) {
        geometricForm += ' ';
    }
    console.log(geometricForm);
    geometricForm = '';
}

