// Codewars Challenge - You're a square!

// Given an integral number, determine if it's a square number

const isSquare = n => Number.isSafeInteger(Math.sqrt(n))

isSquare(25)
console.log(isSquare(13))
console.log(isSquare(25))
