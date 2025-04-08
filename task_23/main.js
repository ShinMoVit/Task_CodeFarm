const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, NaN, 6];

function reverseArr(arr) {
  const arrClean = arr.filter((item) => Boolean(item));
  const filterOverlap = arrClean.filter(
    (item, index) => arrClean.indexOf(item) === index
  );
  for (let i = 0; i < filterOverlap.length / 2; i++) {
    let semmetricalIndex = filterOverlap.length - i - 1;
    [filterOverlap[i], filterOverlap[semmetricalIndex]] = [
      filterOverlap[semmetricalIndex],
      filterOverlap[i],
    ];
  }
  return filterOverlap;
}
const result = reverseArr(arrNumber);
console.log(result);
