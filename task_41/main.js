let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filterStatus = "all";
let editingId = null;

const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const errorMessage = document.getElementById("errorMessage");
const actionButton = document.getElementById("actionButton");

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  const filtered = todos.filter((todo) => {
    if (filterStatus === "active") return !todo.completed;
    if (filterStatus === "completed") return todo.completed;
    return true;
  });

  if (filtered.length === 0) {
    todoList.innerHTML = "<li>Không có công việc nào</li>";
    return;
  }

  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
        <span onclick="toggleComplete('${todo.id}')" 
              style="text-decoration: ${
                todo.completed ? "line-through" : "none"
              }; cursor: pointer;">
          ${todo.text}
        </span>
        <div class="actions">
          <button onclick="startEdit('${todo.id}')">Sửa</button>
          <button onclick="deleteTodo('${todo.id}')">Xóa</button>
        </div>
      `;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const value = input.value.trim();
  if (!value) {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";

  if (editingId) {
    const index = todos.findIndex((t) => t.id === editingId);
    if (index !== -1) {
      todos[index].text = value;
      editingId = null;
      actionButton.textContent = "Thêm";
    }
  } else {
    todos.push({
      id: Date.now().toString(),
      text: value,
      completed: false,
    });
  }

  input.value = "";
  saveTodos();
  renderTodos();
}

function startEdit(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    input.value = todo.text;
    editingId = id;
    actionButton.textContent = "Cập nhật";
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

function toggleComplete(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

function filterTodos(status) {
  filterStatus = status;
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const current = [...document.querySelectorAll(".filter-btn")].find((btn) =>
    btn.textContent.includes(
      status === "all" ? "Tất cả" : status === "active" ? "Chưa" : "Hoàn"
    )
  );
  current?.classList.add("active");
  renderTodos();
}

// Initial render
renderTodos();
