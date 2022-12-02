// let word = 'arara';

// function verifyPalindrome (word) {

// let split = word.split('');
// let reverse = split.reverse();
// let join = reverse.join('');
// let reversed = join;
// let palindrome = false;

// for (let index = 0; index < word.length; index += 1) {
//     if (word[index] === word[word.length -1 - index]) {
//         palindrome = true;
//     } else {
//         palindrome = false;
//     }
// }



//     return palindrome
// }

// console.log(verifyPalindrome(word));         // Requisito 1


// let testingNumbers = [2, 3, 6, 7, 10, 1];

// function verifyHigher (numbers) {

// let higher = numbers[0];

// for (let index in numbers) {
//     if (numbers[index] > higher) {
//         higher = index;
//     }
// }

//     return higher
// }

// console.log(verifyHigher(testingNumbers));           // Requisito 2


// let testingNumbers = [2, 4, 6, 7, 10, 0, -3];

// function verifyHigher (numbers) {

//     let smaller = numbers[0];

//     for (let index in numbers) {
//         if (numbers[index] < smaller) {
//             smaller = index;
//         }
//     }

//         return smaller
//     }

//     console.log(verifyHigher(testingNumbers));           // Requisito 3


// let testingNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function verifyBiggerSize (names) {

// let nameCharacters = names[0].length;
// let biggestName;

// for (let index in names) {
//     if (names[index].length > nameCharacters) {
//         nameCharacters = names[index].length;
//         biggestName = names[index];
//     }
// }
//     return biggestName;
// }

// console.log(verifyBiggerSize(testingNames));            // Requisito 4


// let arrNumbers = [2, 3, 2, 5, 8, 2, 3];

// function numberRepetitionVerify(numbers) {

//     let repetitionsNumber = 0;
//     let mostRepeatedValue = numbers[0];

//     for (let index in numbers) {
//         let repetition = 0;
//         for (let value of numbers) {
//             if (numbers[index] === value) {
//                 repetition += 1;
//             }
//         }
//         if (repetition > repetitionsNumber) {
//             repetitionsNumber = repetition;
//             mostRepeatedValue = numbers[index];
//         }

//     }

//     return mostRepeatedValue
// }

// console.log(numberRepetitionVerify(arrNumbers));            // Requisito 5


// let testingNumber = 5;

// function sum1toN(N) {

//     let sum = 0;
//     let elements = [];

//     for (let index = 1; index <= N; index += 1) {
//         sum += index;
//         elements.push(index);
//     }

//     return elements.join('+') + ' = ' + sum
// }

// console.log(sum1toN(testingNumber));            // Requisito 6

// let ending = 'be';
// let word = 'trybe';
// let reversedEnding = ending.split('').reverse().join(''); // 'eb'
// let reversedWord = word.split('').reverse().join(''); // 'ebyrt'

// function verifyEndingWord(word, ending) {

//     let equal = false;

//     for (let indexEnding = 0; indexEnding < ending.length; indexEnding += 1) {
//         if (word[indexEnding] === ending[indexEnding]) {
//             equal = true;
//         } else {
//             equal = false;
//         }
//     }
//     return equal
// }

// console.log(verifyEndingWord(reversedWord, reversedEnding));         // Requisito 7