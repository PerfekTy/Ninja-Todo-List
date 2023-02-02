const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const error = document.querySelector(".error");
const search = document.querySelector(".search input");

const generateTemplate = todo => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="glyphicon glyphicon-remove delete"></i>
  </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  let todo = addForm.add.value.trim();

  if (!todo) {
    error.innerHTML = "You have to write something first!";
  } else {
    error.innerHTML = " ";
    generateTemplate(todo);
    addForm.reset();
  }
});

// deleting todos
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("hide"));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("hide"));
};

// keyup event
search.addEventListener("keyup", e => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
