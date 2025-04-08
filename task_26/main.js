const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function countElement(arr) {
  const count = {};
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if (count[fruit]) {
      count[fruit]++;
    } else {
      count[fruit] = 1;
    }
  }
  return count;
}

const result = countElement(fruits);

console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }
