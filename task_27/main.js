const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {
    const groupValue = curr[key];
    if (!acc[groupValue]) {
      acc[groupValue] = [];
    }
    acc[groupValue].push(curr);
    return acc;
  }, {});
}
console.log(groupBy(users, "age"));
console.log(groupBy(users, "address"));
