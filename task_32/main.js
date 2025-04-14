const arrayString = ["JavaScript", "java", "Python", "Ruby", ["PHP", ["Hehe"]]];
let keyWord = "ja";
function filterByKeyword(arrayString, keyWord) {
  const flatArr = arrayString.flat(Infinity);
  return flatArr.filter((item) =>
    item.toLowerCase().includes(keyWord.toLowerCase())
  );
}
console.log(filterByKeyword(arrayString, keyWord)); //["JavaScript", "java"]
