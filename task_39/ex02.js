function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 1000);
  });
}

function star() {
  getData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => {
      star();
    });
}
star();
