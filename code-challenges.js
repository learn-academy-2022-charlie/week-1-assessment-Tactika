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

// ||------------------------------------------------------------|| //


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

// ||------------------------------------------------------------|| //

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// --- Pseudocode --- //
//  Input: Two Arrays [arr1, arr2]
//  Logic: 
//      - Create new function for reuseability called => combinedArrLength
//      - Combine both arrays
//          - use spread operator to create new array [newArr]
//      - Calculate length of combined array using built-in array.length prototype method
//      - return array length
//  Output: a return of the length of the combined array in the data type of 'number'

const combinedArrLength = (arr1, arr2) => newArr = myNumbers1.concat(...myNumbers2).length

console.log(combinedArrLength(myNumbers1, myNumbers2)) // the number type of 10 is expected

// Output:
//      - 10
//      - typeof === 'number'

// ||------------------------------------------------------------|| //

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

// --- Pseudocode --- //

//  Function: reverseStr
//  Arguements: 1 => a undetermined length of string
//  Logic: 
//      - string will need to be split apart using string/array.split() method
//      - string will need to be reversed in array using array.reverse() method
//      - string will then be recombined using array.join() method
//      - the reverse of the input string will then be returned as a single string
//  Output:
//      - Output will be a reverse of the input string with typeof 'string'

const reverseStr = (string) => string.split("").reverse().join("")

console.log(reverseStr(currentCohort)) // Expected: "2202 eilrahC"

// Output:
//      - "2202 eilrahC"
//      - Typeof === 'string'

// ||------------------------------------------------------------|| //

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// --- Pseudocode --- //

//  Function: oddOrEven
//  Arguements: 1 => array of numbers
//  Logic: 
//      - loop over an array 
//      - check if each item is odd or even
//      - logs a string of 'odd' if item is odd and string of 'even' if item is even
//          - if a return of a string would be more fitting for the test case we could use a retrun instead of a console.log
//  Output:
//      - Output will be a multiple strings of either 'even' or 'odd'

// more concise code
const oddOrEven = numsArr => numsArr.forEach(num => num % 2 === 0 ? console.log("even"): console.log("odd"))

// More verbose version 
// const oddOrEven = (numsArr) => {
//     for(let i =0; i < numsArr.length-1; i++) {
//         if(numsArr[i] % 2 === 0) {
//             console.log("even")
//         } else {
//             console.log("odd")
//         }
//     }
// }

console.log(oddOrEven(myArray)) // expected 'odd' 'even' 'odd' 'even' 'odd' 'even'

// Output: 
//      - "odd" "even" "odd" "even" "odd" "even"
//      - typeof's === 'string'

// ||------------------------------------------------------------|| //

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// --- Pseudocode --- //

//  Function: subtractLowerNum
//  Arguements: 2 numbers => num1, num2 
//  Logic: 
//      - take in two numbers 
//      - find the larger of the two numbers
//      - subtract the smaller number from the larger number
//      - returns result of calculation
//  Output:
//      - Output will be a number with typeof of number

const subtractLowerNum = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1;

console.log(subtractLowerNum(number1, number2)) // expected result: 42  with typeof === 'number'
console.log(subtractLowerNum(number3, number4)) // expected result: 3   with typeof === 'number'

// Output: 
//      - 42
//      - 3
//      - both with typeof === 'number'