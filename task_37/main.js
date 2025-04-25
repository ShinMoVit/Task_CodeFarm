let count = 1;
const removeItem = document.querySelector(".btn-remove");
const removeAllItem = document.querySelector(".btn-removeAll");
const addItem = document.querySelector(".btn-add");
const list = document.querySelector("#list");

addItem.addEventListener("click", () => {
  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.textContent = `Phần tử ${count}`;
  list.appendChild(newItem);
  count++;
});

removeItem.addEventListener("click", () => {
  const lastItem = list.lastElementChild;

  if (lastItem) {
    list.removeChild(lastItem);
    count--;
  } else {
    alert("Không còn phần tử nào để xóa!");
  }
});

removeAllItem.addEventListener("click", () => {
  if (list.children.length === 0) {
    alert("Không còn phần tử nào để xóa!");
    return;
  }

  const confirmDelete = confirm(
    "Bạn có chắc chắn muốn xóa tất cả phần tử không?"
  );
  if (confirmDelete) {
    list.innerHTML = "";
    count = 1;
  }
});
