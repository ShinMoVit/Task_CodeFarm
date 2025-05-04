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

async function main() {
  try {
    const user = await getUser(1);
    console.log("Infor:", user);

    const products = await getPurchases(user.id);
    console.log("Products:", products);

    const productDetails = await Promise.all(
      products.map((product) =>
        getProductDetails(product.id, product.product, product.price)
      )
    );

    productDetails.forEach((product) => {
      console.log("ProductDetails:", product);
    });

    const result = productDetails.reduce(
      (total, product) => total + product.price,
      0
    );
    console.log("Total:", result);
  } catch (error) {
    console.error(error);
  }
}

main();
