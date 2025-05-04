function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John", age: 30 });
    }, 1000);
  });
}

function getPurchases(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },
      ]);
    }, 1000);
  });
}

function getProductDetails(productId, productName, productPrice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: productId, name: productName, price: productPrice });
    }, 1000);
  });
}

getUser(1)
  .then((user) => {
    console.log("Ìnor:", user);
    return getPurchases(user.id);
  })
  .then((products) => {
    console.log("Products:", products);

    const detailPromises = products.map((product) =>
      getProductDetails(product.id, product.product, product.price)
    );

    return Promise.all(detailPromises);
  })
  .then((productDetails) => {
    productDetails.forEach((product) => {
      console.log("ProductDetail:", product);
    });

    const result = productDetails.reduce(
      (total, product) => total + product.price,
      0
    );
    console.log("Total:", result);
  })
  .catch((err) => {
    console.error(err);
  });
