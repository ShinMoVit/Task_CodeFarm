let n = +prompt("Nhập số nguyên dương: ");
if (n <= 2 || isNaN(n)) {
  document.write("Vui lòng nhập một số nguyên dương >= 2.");
} else {
  printNumberPrimes(n);
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function printNumberPrimes(n) {
  document.write(`Các số nguyên tố từ 2 đến ${n} là: `);
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      document.write(`${i}, `);
    }
  }
}
