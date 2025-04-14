const arrayWords = [
  "Hello world",
  "JS is fun",
  "Arrays and strings",
  "Java",
  "PHP",
  "Python",
];

function countTotalWords(arr) {
  return arr.reduce((sum, str) => sum + str.split(" ").length, 0);
}

console.log(countTotalWords(arrayWords)); //11
