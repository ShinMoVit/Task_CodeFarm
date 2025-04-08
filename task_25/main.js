const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
  null,
  null,
  NaN,
  NaN,
  undefined,
  undefined,
];

function removeDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let exits = result.some((x) => Object.is(x, arr[i]));
    if (!exits) {
      result.push(arr[i]);
    }
  }

  return result;
}

const result = removeDuplicate(fruits);

console.log(result);
