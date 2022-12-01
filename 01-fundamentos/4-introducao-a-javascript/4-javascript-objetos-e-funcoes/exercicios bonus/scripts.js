// EXERCÍCIO BÔNUS 1

// let romanNumeral = 'MCMXLIX'; 

// let equivalenceTable = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }

// function traductionNumber(roman) {

//     let romanArray = roman.split('');
//     let translate = [];
//     let finalAlgarism = 0;
//     let sumTranslate = 0;

//     for (let index in romanArray) {
//         for (let key in equivalenceTable) {
//             if (key === romanArray[index]) {
//                 finalAlgarism = equivalenceTable[romanArray[index]];
//             }
//         }
//         translate.push(finalAlgarism)
//     }

//     for (let index = 0; index < translate.length; index += 1) {
//         if (translate[index + 1] > translate[index]) {
//             sumTranslate -= translate[index];
//         } else {
//             sumTranslate += translate[index];
//         }
//     }


//     return sumTranslate
// }

// console.log(traductionNumber(romanNumeral));                 // EXERCÍCIO BÔNUS 1


// EXERCÍCIO BÔNUS 2

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {

    let evenNumber = [];

    for (let indexPrimary in vector) {
        for (let indexSecundary in vector[indexPrimary]) {
            if (vector[indexPrimary][indexSecundary] %2 === 0) {
                evenNumber.push(vector[indexPrimary][indexSecundary]);
            }
        }
    }

    return evenNumber
}

console.log(arrayOfNumbers(vector));