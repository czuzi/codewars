// Codewars Challenge - Unique In Order

/* Implement the function unique_in_order which takes as argument a sequence
and returns a list of items without any elements with the same value next
to each other and preserving the original order of elements. */

const uniqueInOrder = iterable => [...iterable].filter((c, i) => c !== iterable[i - 1])

console.log(uniqueInOrder("AAAABBBCCDAABBB"))
console.log(uniqueInOrder("ABBCcAD"))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
