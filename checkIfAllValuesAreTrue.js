// Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

function allTruthy(...args){
    return args.every(arg => arg)
}

console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))
console.log(allTruthy(5, 4, 3, 2, 1, 0, false))
console.log(allTruthy(5, 4, 3, 2, 1, 0, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0, "hello"))