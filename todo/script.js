
let input = document.getElementById("input");
let todos = document.getElementById("todos");

input.addEventListener("keypress", event => {
    if (event.key == "Enter" && input.value.length >= 1) {
        addTodo(input.value);
        input.value = "";
    }
});

function addTodo(text) {
    let todo = document.createElement("label");
    todo.classList.add("todo");
    todo.innerHTML = text;
    
    todo.addEventListener("click", event => {
        todo.classList.add("todo--delete");
        setTimeout(() => todos.removeChild(todo), 180);
    });
    todos.appendChild(todo);
}
