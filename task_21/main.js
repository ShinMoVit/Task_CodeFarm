{
  // ! Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng
  function cleanFalsyValues(numbers) {
    return numbers.filter(function (num) {
      return Boolean(num);
    });
  }

  // console.log(cleanFalsyValues([1, , "", null, "hello", undefined, NaN, 2]));
}

{
  // ! Viết hàm lọc lấy các số chẵn của một mảng
  const filterEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);
  // console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
  // console.log(filterEvenNumbers([1, 3, 5, 7]));
  // console.log(filterEvenNumbers([]));
  // console.log(filterEvenNumbers([-2, -1, 0, 1, 2]));
}

{
  // ! Viết hàm lọc lấy các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi
  const filterLongStrings = (arr) => arr.filter((str) => str.length > 5);

  // console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"]));
  // console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]));
  // console.log(filterLongStrings(["hi", "bye", "yes"]));
}

{
  /**
   * !Cho trước mảng chứa các số nguyên, viết hàm tìm:
   *Tìm số lớn nhất trong mảng và vị trí của nó (Nếu có 2 số bằng nhau, lấy số đầu tiên tìm được).
   *Tìm số nhỏ nhất trong mảng và vị trí của nó (Nếu có 2 số bằng nhau, lấy số đầu tiên tìm được).
   *Tính trung bình cộng các số nguyên tố trong mảng, nếu mảng không có số nguyên tố nào, trả về null.
   */

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function findMinMaxAverage(numbers) {
    let max = numbers[0];
    let maxIndex = 0;
    let min = numbers[0];
    let minIndex = 0;
    let sumPrime = 0;
    let countPrime = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
        maxIndex = i;
      }
      if (numbers[i] < min) {
        min = numbers[i];
        minIndex = i;
      }
      if (isPrime(numbers[i])) {
        sumPrime += numbers[i];
        countPrime++;
      }
    }

    let primeAverage =
      countPrime > 0 ? Math.floor((sumPrime / countPrime) * 100) / 100 : null;

    return { max, maxIndex, min, minIndex, primeAverage };
  }

  // console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));
  // console.log(findMinMaxAverage([5, 5, 2, 2, 1]));
  // console.log(findMinMaxAverage([-3, 7, -8, 11, 0]));
}

{
  function insertNumber(arr, num) {
    let filteredArr = arr.filter(
      (item) => !Number.isNaN(item) && typeof item === "number"
    );
    if (!Number.isNaN(num)) {
      filteredArr.push(num);
    }
    filteredArr.sort((a, b) => a - b);

    return filteredArr;
  }

  // console.log(insertNumber([1, 3, 5, 7, 9, 22, 11], 44));
  // console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2));
  // console.log(insertNumber([], 5));
  // console.log(insertNumber([-1, 10, -5, "abc"], -3));
  // console.log(insertNumber([5, 2, 8], NaN));
}
