const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const productCount = document.getElementById("productCount");
const pageInfo = document.getElementById("pageInfo");
const productListSection = document.getElementById("productListSection");
const productDetailSection = document.getElementById("productDetailSection");
const pagination = document.querySelector(".pagination");
const controls = document.querySelector(".controls");

let products = [];
let filteredProducts = [];
let currentPage = 1;
const limit = 8;

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  products = data.products;
  filteredProducts = [...products];
  renderProducts();
}

function renderProducts() {
  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const currentProducts = filteredProducts.slice(start, end);

  productList.innerHTML = currentProducts
    .map(
      (product) => `
  <div class="product">
    <img src="${product.thumbnail}" alt="${product.title}">
    <div class="product-content">
      <h3>${product.title}</h3>
      <p>${product.description.slice(0, 60)}...</p>
      <strong>${product.price} USD</strong>
      <button onclick="viewDetail(${product.id})">Xem chi tiết</button>
    </div>
  </div>
`
    )
    .join("");

  productCount.textContent = `Hiển thị ${currentProducts.length} / ${filteredProducts.length} sản phẩm`;
  pageInfo.textContent = `Trang ${currentPage} / ${Math.ceil(
    filteredProducts.length / limit
  )}`;
}

function searchProducts() {
  const query = searchInput.value.trim();
  if (!query) {
    filteredProducts = [...products];
    currentPage = 1;
    renderProducts();
    return;
  }

  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      filteredProducts = data.products;
      currentPage = 1;
      renderProducts();
    });
}

function viewDetail(id) {
  productListSection.style.display = "none";
  pagination.style.display = "none";
  productCount.style.display = "none";
  controls.style.display = "none";
  productDetailSection.style.display = "block";

  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      document.getElementById("productDetail").innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}" width="300">
        <p><strong>Mô tả:</strong> ${product.description}</p>
        <p><strong>Giá:</strong> ${product.price} USD</p>
        <p><strong>Thương hiệu:</strong> ${product.brand}</p>
        <p><strong>Danh mục:</strong> ${product.category}</p>
      `;
    });
}

function closeDetail() {
  productDetailSection.style.display = "none";
  productListSection.style.display = "block";
  pagination.style.display = "flex";
  productCount.style.display = "block";
  controls.style.display = "flex";
}

function sortProducts() {
  const value = sortSelect.value;

  if (value === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (value === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    filteredProducts = [...products];
  }

  currentPage = 1;
  renderProducts();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
}

function nextPage() {
  const maxPage = Math.ceil(filteredProducts.length / limit);
  if (currentPage < maxPage) {
    currentPage++;
    renderProducts();
  }
}
searchInput.addEventListener("input", searchProducts);

fetchProducts();
