// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// --- Pseudocode --- //
// Function ==> boilingPointStatus
// Arguement = any given number which represents a temperature in fahrenheit==> (temperature)
//
// Logic
//  - Conditional Statement to check if number/temperature is below 212 degrees fahrenheit, above 212 degrees fahrenheit, or equal to 212 degrees fahrenheit
//      - if equal to 212 log/return '212 is at boiling point'
//      - if greater than 212 log/return '<number> is above boiling point'
//      - if less than 212 log/return '<number> is below boiling point'
//
// Expected output:
//  - Output should be equivalent to a string data type.
//      - 42 should output  ==> '42 is below boiling point'
//      - 350 should output ==> '350 is above boiling point'
//      - 212 should output ==> '212 is at boiling point'
//      - Any input that isn't a number should output ==> '<temperature> isn't a valid temperature, please try another valid number/temperature!'

// Long Ternary Option

// const boilingPointStatus = (temperature) => temperature === 212 ? `${temperature} is at boiling point`: temperature > 212 ? `${temperature} is above boiling point`: temperature < 212 ? `${temperature} is below boiling point`: `${temperature} isn't a valid temperature, please try another valid number/temperature!`

// Short Ternary Option (Best Option)
const boilingPointStatus = (temperature) => {
    return temperature === 212 ? `${temperature} is at boiling point`
    : temperature > 212 ? `${temperature} is above boiling point`
    : temperature < 212 ? `${temperature} is below boiling point`
    : `${temperature} isn't a valid temperature, please try another valid number/temperature!`
}

// More Verbose Option
// const boilingPointStatus = (temperature) => {
//     if(temperature === 212) {
//         return `${temperature} is at boiling point`
//     } else if( temperature > 212 ) {
//         return `${temperature} is above boiling point`
//     } else if ( temperature < 212 ) {
//         return `${temperature} is below boiling point`
//     } else {
//         return `${temperature} isn't a valid temperature, please try another valid number/temperature!`
//     }      
// }

console.log(boilingPointStatus(temp1)) // 42 should output  ==> '42 is below boiling point'
console.log(boilingPointStatus(temp2)) // 350 should output ==> '350 is above boiling point'
console.log(boilingPointStatus(temp3)) // 212 should output ==> '212 is at boiling point'
console.log(boilingPointStatus('ten')) // 'ten' should output ==> 'ten isn't a valid temperature, please try another valid number/temperature!'

// Output:
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point
// ten isn't a valid temperature, please try another valid number/temperature!


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
