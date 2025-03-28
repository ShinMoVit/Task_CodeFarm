const salary = +prompt("Vui lòng điền thu nhập cá nhân của bạn (đồng): ");

function taxSalary(salary) {
  let tax = 0;
  const brackets = [
    { incomeLimit: 11000000, rate: 0 },
    { incomeLimit: 25000000, rate: 0.05 },
    { incomeLimit: 50000000, rate: 0.1 },
    { incomeLimit: 80000000, rate: 0.2 },
    { incomeLimit: Infinity, rate: 0.3 },
  ];

  if (isNaN(salary) || salary < 0) {
    return "Thu nhập không hợp lệ";
  }

  let remainingSalary = salary;

  for (let i = 0; i < brackets.length; i++) {
    const currentIncomeLimit =
      i === 0
        ? brackets[i].incomeLimit
        : brackets[i].incomeLimit - brackets[i - 1].incomeLimit;

    if (remainingSalary > currentIncomeLimit) {
      tax += currentIncomeLimit * brackets[i].rate;
      remainingSalary -= currentIncomeLimit;
    } else {
      tax += remainingSalary * brackets[i].rate;
      break;
    }
  }

  return `Tiền thuế bạn phải đóng là ${tax.toLocaleString("vi-VN")} đồng`;
}

document.writeln(taxSalary(salary));
