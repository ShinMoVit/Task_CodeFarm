const salary = +prompt("Vui lòng điền thu nhập cá nhân của bạn(đồng): ");
function taxSalary(salary) {
  let scot = 0;
  if (isNaN(salary) || salary < 0) {
    return `Thu nhập không hợp lệ`;
  } else if (salary <= 11000000) {
    scot = 0;
  } else if (salary <= 25000000) {
    scot = salary * 0.05;
  } else if (salary <= 50000000) {
    scot = salary * 0.1;
  } else if (salary <= 80000000) {
    scot = salary * 0.2;
  } else if (salary > 80000000) {
    scot = salary * 0.3;
  }
  return `Tiền thuế bạn phải đóng là ${scot.toLocaleString("vi-VN")} đồng`;
}

document.writeln(taxSalary(salary));
