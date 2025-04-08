const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
  for (let i = 0; i <= arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
const result = checkSymmetricalArr(arrayNumber);
console.log(result);
