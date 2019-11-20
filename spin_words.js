// Codewars Challenge - Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed
// (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.

function spinWords(str) {
  const strArr = str.split(" ")
  strArr.forEach((e, i) => {
    if (e.length >= 5) {
      strArr[i] = e.split("").reverse().join("")
    }
  })
  return strArr.join(" ")
}

//another solution
function spinWords2(str) {
  return str.split(" ").map(e => e.length > 4 ? e.split("").reverse().join("") : e).join(" ")
}

console.log(spinWords2("try this out at the terminal"))
