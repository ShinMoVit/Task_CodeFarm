function getData(callback) {
  setInterval(() => {
    callback([1, 2, 3, 4]);
  }, 1000);
}

getData((data) => {
  console.log(data);
});
