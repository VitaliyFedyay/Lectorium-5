function onPage() {
  let saveButton = document.getElementById("save")
  let clearButton = document.getElementById("delete")
  let input = document.querySelector("input[type='text']")
  let ul = document.getElementById("todos")

  saveButton.addEventListener("click", () => {
    localStorage.setItem("todos", ul.innerHTML)
  })

  clearButton.addEventListener("click", () => {
    ul.innerHTML = ""
    localStorage.removeItem("todos", ul.innerHTML)
  })

  function createTodo() {
    let li = document.createElement("li")
    li.className = "list-group-item"
    let textSpan = document.createElement("span")
    textSpan.classList.add("todo-text")
    let newTodo = input.value
    textSpan.append(newTodo)

    let deleteButton = document.createElement("span")
    deleteButton.classList.add("todo-trash")
    let icon = document.createElement("i")
    icon.classList.add("fas", "fa-trash")
    deleteButton.appendChild(icon)

    ul.appendChild(li).append(textSpan, deleteButton)
    input.value = ""
    listenDeleteTodo(deleteButton)
  }

  function onClickTodo(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked")
    }
  }

  function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
      element.parentElement.remove()
      event.stopPropagation()
    })
  }

  function loadTodos() {
    let data = localStorage.getItem("todos")
    if (data) {
      ul.innerHTML = data
    }
    let deleteButtons = document.querySelectorAll("span.todo-trash")
    for (let button of deleteButtons) {
      listenDeleteTodo(button)
    }
  }

  input.addEventListener("keypress", (keyPressed) => {
    let keyEnter = 13
    if (keyPressed.which == keyEnter) {
      createTodo()
    }
  })

  ul.addEventListener("click", onClickTodo)
  loadTodos()
}

document.addEventListener("DOMContentLoaded", onPage)