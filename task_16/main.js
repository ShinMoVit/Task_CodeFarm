const km = +prompt("Nhập số km:");
function taxiBill(km) {
  let postage = 0;
  if (isNaN(km) || km <= 0) return `Vui lòng nhập số phù hợp lớn hơn 0`;
  else if (km <= 1) postage = 10000;
  else if (km <= 30) {
    postage = 10000 + 8000 * (km - 1);
  } else if (km > 30) {
    postage = 10000 + 8000 * 29 + 7000 * (km - 30);
  }
  return `Số tiền bạn phải trả cho quãng đường ${km}km là : ${postage}đ`;
}
document.writeln(taxiBill(km));
