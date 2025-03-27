const a = +prompt("Nhập số a:");
const b = +prompt("Nhập số b:");
function isSameSign(a, b) {
  if (isNaN(a) || isNaN(b)) {
    document.writeln(`Vui lòng nhập số hợp lệ`);
    return;
  }
  if (a * b > 0) {
    return true;
  }
  return false;
}

if (isSameSign(a, b)) {
  document.writeln(`a = ${a}, b = ${b}, hai số cùng dấu `);
} else {
  document.writeln(`a = ${a}, b = ${b}, hai số trái dấu `);
}
