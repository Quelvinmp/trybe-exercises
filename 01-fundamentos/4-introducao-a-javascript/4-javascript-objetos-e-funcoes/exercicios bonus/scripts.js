// // EXERCÍCIO BÔNUS 1

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

// function convertRomanToNatural(roman) {

//     let romanArray = roman.split('');
//     let naturalArray = [];
//     let finalAlgarism = 0;
//     let naturalNumber = 0;

//     for (let index in romanArray) {
//         for (let key in equivalenceTable) {
//             if (key === romanArray[index]) {
//                 finalAlgarism = equivalenceTable[romanArray[index]];
//             }
//         }
//         naturalArray.push(finalAlgarism)
//     }

//     for (let index = 0; index < naturalArray.length; index += 1) {
//         if (naturalArray[index + 1] > naturalArray[index]) {
//             naturalNumber -= naturalArray[index];
//         } else {
//             naturalNumber += naturalArray[index];
//         }
//     }


//     return naturalNumber
// }

// console.log(convertRomanToNatural(romanNumeral));                 // EXERCÍCIO BÔNUS 1


// EXERCÍCIO BÔNUS 2

// let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {

//     const evenNumber = [];

//     for (let indexPrimary in vector) {
//         for (let indexSecundary in vector[indexPrimary]) {
//             if (vector[indexPrimary][indexSecundary] %2 === 0) {
//                 evenNumber.push(vector[indexPrimary][indexSecundary]);
//             }
//         }
//     }

//     return evenNumber
// }

// console.log(arrayOfNumbers(vector));                    // EXERCÍCIO BÔNUS 2


// EXERCÍCIO BÔNUS 3

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

const separeteSingleWords = wordsArray => {

    wordsArray.sort();

    const uniqueWords = [wordsArray[0]];
    for (let index = 1; index < wordsArray.length; index += 1) {
        if (wordsArray[index] !== wordsArray[index + 1] && index + 1 !== wordsArray.length) {
            uniqueWords.push(wordsArray[index + 1])
        }
    }
    return uniqueWords
}

const repetitionsInObject = (singleWords, wordsArray) => {

    const singleWordsRepetitions = {};
    const numberOfRepetitions = [];

    for (let value of singleWords) {
        let count = 0;
        for (let index in wordsArray) {
            if (value === wordsArray[index]) {
                count += 1
            }
        }
        numberOfRepetitions.push(count);
        for (let indexNumber in numberOfRepetitions) {
            singleWordsRepetitions[value] = numberOfRepetitions[indexNumber];
        }
    }

    return singleWordsRepetitions
}

console.log(repetitionsInObject(separeteSingleWords(basket), basket));                  // EXERCÍCIO BÔNUS 3


// EXERCÍCIO BÔNUS 4