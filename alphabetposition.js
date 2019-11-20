//Codewars challenge - Replace With Alphabet Position

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(c => c.charCodeAt(c) - 96)
    .join(" ")
}

console.log(alphabetPosition("iasejdf asdgpoj . sd.vaef "))
