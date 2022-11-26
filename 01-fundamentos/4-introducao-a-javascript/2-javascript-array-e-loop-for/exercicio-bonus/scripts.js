// Requisito 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);


// Requisito 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
// }

// console.log(numbers);


// Requisito 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiple = [];

for (let index = 1; index <= numbers.length; index += 1) {
    for (let secondIndex = index -1; secondIndex < index; secondIndex += 1) {
        if (index < numbers.length) {
            multiple.push(numbers[index] * numbers[secondIndex]);
        } else if (index === numbers.length) {
            multiple.push(NaN = numbers[numbers.length -1] * 2);
        }
    }
}

console.log(multiple);
