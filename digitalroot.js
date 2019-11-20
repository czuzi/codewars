// Codewars Challenge - Sum of Digits / Digital Root

// In this kata, you must create a digital root function.
// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.

function digitalRoot(n) {
  let res = 0
  const nSplit = n.toString().split("")
  for (const i of nSplit) {
    res = res + Number(i)
  }
  if (res >= 10) {
    return digital_root(res)
  } else {
    return res
  }
}

// Another solution without recursion
const digitalRoot2 = n => ((n - 1) % 9) + 1

console.log(digital_root(16))
console.log(digital_root(456))
console.log(digitalRoot(56))
