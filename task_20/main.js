function printChristmasTree(n, character) {
  let christmasTree = "";
  for (let i = 1; i <= n; i++) {
    christmasTree += " ".repeat(n - i) + character.repeat(2 * i - 1) + "\n";
  }
  christmasTree += " ".repeat(n - 1) + character + "\n";
  return christmasTree;
}

console.log(printChristmasTree(10, "O"));
