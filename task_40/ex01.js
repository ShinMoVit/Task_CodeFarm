function getUser(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "John", age: 30 });
  }, 1000);
}

function getPurchases(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, userId: userId, product: "Laptop", price: 1000 },
      { id: 2, userId: userId, product: "Phone", price: 2000 },
    ]);
  }, 1000);
}

function getProductDetails(productId, productName, productPrice, callback) {
  setTimeout(() => {
    callback({ id: productId, name: productName, price: productPrice });
  }, 1000);
}

getUser(1, (user) => {
  console.log("Infor:", user);
  getPurchases(user.id, (products) => {
    console.log("Products:", products);
    let total = 0;
    let count = 0;
    products.forEach((product) => {
      getProductDetails(
        product.id,
        product.product,
        product.price,
        (productDetail) => {
          console.log("ProductDetails:", productDetail);
          total += product.price;
          count++;
          if (count === products.length) {
            console.log("Total:", total);
          }
        }
      );
    });
  });
});
