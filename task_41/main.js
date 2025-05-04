const todoList = document.querySelector("#todo-list");
const titleEle = document.querySelector("#title");
const descriptionEle = document.querySelector("#description");
const todoForm = document.querySelector("#todo-form");
const btnReset = document.querySelector("#btnReset");
const btnSubmit = document.querySelector("#btnSubmit");
let idEditing = null;
let todos = [];
let todoCount = 0;

function generateRandomID() {
  todoCount++;
  return `todo_${todoCount}`;
}

function renderTodos() {
  todos.sort((a, b) => {
    if (a.status === b.status) return 0;
    if (a.status && !b.status) return 1;
    if (!a.status && b.status) return -1;
  });
  const data = todos
    .map((todo, index) => {
      return `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td>
          <button class="btn ${
            todo.status ? "btn-success" : "btn-secondary"
          }" onclick="toggleStatus(${index})">
            ${todo.status ? "Completed" : "Pending"}
          </button>
        </td>
        <td>
        <button class="btn btn-danger" onclick="deleteTodo(${index})">Remove</button>
        <button class="btn btn-warning" onclick="editTodo(${index})">Update</button>
        </td>
      </tr>
    `;
    })
    .join("");

  todoList.innerHTML = data;
}
renderTodos();

const addTodo = () => {
  const title = titleEle.value.trim();
  const description = descriptionEle.value.trim();

  if (title === "") {
    alert("Title cannot be empty!");
    return;
  }

  if (idEditing === null) {
    const creatTodo = {
      id: generateRandomID(),
      title,
      description,
      status: false,
    };
    todos.push(creatTodo);
  } else {
    if (todos[idEditing]) {
      todos[idEditing].title = title;
      todos[idEditing].description = description;
    }
    idEditing = null;
  }

  todoForm.reset();
  renderTodos();
  saveTodos();
};

const editTodo = (index) => {
  if (todos[index]) {
    titleEle.value = todos[index].title;
    descriptionEle.value = todos[index].description;
    idEditing = index;
  }
};

const deleteTodo = (index) => {
  if (todos[index]) {
    todos.splice(index, 1);
    renderTodos();
    saveTodos();
  }
};

const toggleStatus = (index) => {
  todos[index].status = !todos[index].status;
  renderTodos();
  saveTodos();
};

btnReset.addEventListener("click", () => {
  todoForm.reset();
  idEditing = null;
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todoCount = todos.length;
    renderTodos();
  }
};
loadTodos();
