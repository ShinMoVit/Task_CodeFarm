const todoList = document.querySelector("#todo-list");
const titleEle = document.querySelector("#title");
const descriptionEle = document.querySelector("#description");
const todoForm = document.querySelector("#todo-form");
const btnReset = document.querySelector("#btnReset");
const btnSubmit = document.querySelector("#btnSubmit");
const titleError = document.querySelector("#title-error");

let idEditing = null;
let todos = [];
let todoCount = 0;
let currentFilter = "all";

function generateRandomID() {
  return `todo_${Math.random().toString(36).substr(2, 9)}`;
}

function renderTodos() {
  let filteredTodos = todos;

  if (currentFilter === "active") {
    filteredTodos = todos.filter((todo) => !todo.status);
  } else if (currentFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.status);
  }

  const data = filteredTodos
    .map((todo) => {
      const index = todos.indexOf(todo);
      return `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td>
          <button class="btn ${todo.status ? "btn-success" : "btn-secondary"}"
            onclick="toggleStatus(${index})">
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

const addTodo = () => {
  const title = titleEle.value.trim();
  const description = descriptionEle.value.trim();
  titleError.style.display = "none";

  if (title === "") {
    titleError.style.display = "block";
    return;
  }

  if (idEditing === null) {
    const newTodo = {
      id: generateRandomID(),
      title,
      description,
      status: false,
    };
    todos.push(newTodo);
  } else {
    if (todos[idEditing]) {
      todos[idEditing].title = title;
      todos[idEditing].description = description;
    }
    idEditing = null;
  }

  todoForm.reset();
  btnSubmit.textContent = "Add Todo";
  renderTodos();
  saveTodos();
};

const editTodo = (index) => {
  if (todos[index]) {
    titleEle.value = todos[index].title;
    descriptionEle.value = todos[index].description;
    idEditing = index;
    btnSubmit.textContent = "Update Todo";
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
  btnSubmit.textContent = "Add";
  titleError.style.display = "none";
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

titleEle.addEventListener("input", () => {
  if (titleEle.value.trim() !== "") {
    titleError.style.display = "none";
  }
});

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    renderTodos();
  }
};

const filterTodos = (status) => {
  currentFilter = status;

  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const buttons = document.querySelectorAll(".filter-btn");
  if (status === "all") buttons[0].classList.add("active");
  if (status === "active") buttons[1].classList.add("active");
  if (status === "completed") buttons[2].classList.add("active");

  renderTodos();
};

loadTodos();
