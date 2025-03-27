const a = +prompt("Nhập số a:");
const b = +prompt("Nhập số b:");
const c = +prompt("Nhập số c:");
function findMaxNumber(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Vui lòng nhập số hợp lệ";
  }
  let maxNumber = a;
  if (maxNumber < b) {
    maxNumber = b;
  }
  if (maxNumber < c) {
    maxNumber = c;
  }
  return `Số lớn nhất là: ${maxNumber}`;
}
document.writeln(findMaxNumber(a, b, c));
