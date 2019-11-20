// Codewars Challenge - Find the Divisors.

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors
// (except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

const divisors = number => {
  const divisorsArr = []
  for (let i = 2; i <= Math.floor(number / 2); i++) if (number % i === 0) divisorsArr.push(i)
  return divisorsArr.length ? divisorsArr : number + " is prime"
}

divisors(12)
divisors(25)
divisors(13)
divisors(123)
console.log(divisors(135611209))
