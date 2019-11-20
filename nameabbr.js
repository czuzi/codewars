// Codewars Challenge - Abbreviate a Two Word Name

// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
    return name.split(" ").map(c => c.substring(0, 1).toUpperCase()).join(".")
}

console.log(abbrevName("Sherlock Hiolmes"))