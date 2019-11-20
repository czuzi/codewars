// Codewars Challenge - Who likes it?

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.
// Examples:
// likes [] must be "no one likes this"
// likes ["Peter"] must be "Peter likes this"
// likes ["Jacob", "Alex"] must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] must be "Alex, Jacob and 2 others like this"

function likes(names) {
  const length = names.length; //variable created for the array length, so the program doesnt have to calculate it every time it needs it.
  if (length === 0) return "no one likes this";
  if (length === 1) return `${names[0]} likes this`;
  if (length === 2) return `${names[0]} and ${names[1]} like this`;
  if (length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${length - 2} others like this.`;
}

//Another solution
function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }[Math.min(4, names.length)];
}

console.log(likes([]));
console.log(likes(["john"]));
console.log(likes(["john", "carl"]));
console.log(likes(["john", "carl", "fry", "edmund", "will", "harry"]));
