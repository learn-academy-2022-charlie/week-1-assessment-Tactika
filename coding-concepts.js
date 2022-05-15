// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 
//      A:  It will log the number 10
// b) Verify and explain: 
//      A:  The number 10 was logged to the console since the .length string method counts each individual character in the string, including any special characters and spaces. The .length method can also be used on arrays to find how many items are in an array.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: 
//      A:  It will log the string 'o'
// b) Verify and explain: 
//      A:  As expected the string/character 'o' was logged to the console. The reason for this was due to the brackets calling for an index of 4, which each array object or string starts with an index of 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:
//      A:  This will log the string of "Ruby"
// b) Verify and explain:
//      A:  It logged the string of "Ruby" since the brackets is the way to say you want to access a index of the provided array or string. Array objects have indexes starting at 0 and incrementing by 1 for each additional item in the array. If the index was called that had no value defined, it would return undefined with a typeof 'undefined'.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
//      A:  I believe this will error out since the .toUpperCase() built-in method is a string method and can't be called on an array.
// b) Verify and explain:
//      A:  As expected it threw an error, more specifically it threw a TypeError stating that toUpperCase is not a function. If we wanted to ensure the items in the array were converted to capitalization we could use .map, .forEach, or a standard for loop to iterate over each of the strings within weekendDays and use the toUpperCase() built in string method to  return/log the capitalized output we desired.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
//      A:  The following code should output the string of 'number'
// b) Verify and explain:
//      A:  The string of "number" was logged to the console. The original variable dataTypes is an array of strings with three strings in the array. The console log requests that we get the length of the dataTypes array, which is 3, then requests the typeof method is called, which returns the type of the result of the number provided by the .length method, hence the 'number' logged result.
