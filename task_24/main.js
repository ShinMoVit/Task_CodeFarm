const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...sortArrNumber(left), pivot, ...sortArrNumber(right)];
}

const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]
