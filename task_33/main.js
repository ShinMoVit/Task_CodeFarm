const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  return array.reduce((acc, item) => {
    let [key, value] = item.split(":");
    acc[key] = value;
    return acc;
  }, {});
}

console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }
