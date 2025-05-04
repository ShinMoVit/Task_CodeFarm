function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 1000);
  });
}
async function start() {
  while (true) {
    try {
      const data = await getData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
start();
