let count = 1;
const removeItem = document.querySelector(".btn-remove");
const removeAllItem = document.querySelector(".btn-removeAll");
const addItem = document.querySelector(".btn-add");

addItem.addEventListener("click", () => {
  const list = document.getElementById("list");

  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.textContent = `Phần tử ${count}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xoá";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    list.removeChild(newItem);
  });

  newItem.appendChild(deleteBtn);
  list.appendChild(newItem);
  count++;
});

removeItem.addEventListener("click", () => {
  const list = document.querySelector("#list");
  const lastItem = list.lastElementChild;

  if (lastItem) {
    list.removeChild(lastItem);
    count = Math.max(1, count - 1);
  } else {
    alert("Không còn phần tử nào để xóa!");
  }
});

removeAllItem.addEventListener("click", () => {
  const list = document.querySelector("#list");
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
