
// Method 1: By using list methods
function oddishOrEvenish(num) {
    // If num is negative then make it positive
    if (num < 0) {
        num *= -1
    }
    // Split number into digits list, i.e. 123 -> [1, 2, 3]
    let digits = [...String(num)].map(n => Number(n))
    // Calculate sum of digits list
    let sumOfDigits = digits.reduce((preVal, curVal) => preVal + curVal, 0)
    // Print the result
    sumOfDigits % 2 ? console.log("Odd") : console.log("Even")
}

// Method 2: By using Math
function oddishOrEvenishWithMath(num) {
    // If num is negative then make it positive
    if (num < 0) {
        num *= -1
    }
    // Calculate sum of digits by using mode adding last digit (remainder)
    let sumOfDigits = 0
    while (num > 0) {
        sumOfDigits += num % 10
        num = Math.floor(num / 10)
    }
    // Print the result
    sumOfDigits % 2 ? console.log("Odd") : console.log("Even")
}

// Sample tests
// oddishOrEvenish(-123456)
// oddishOrEvenishWithMath(-123456)
