document.addEventListener("DOMContentLoaded", function() {
    fetchTodos();
});

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            appendTodosToDOM(data);
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
}

function appendTodosToDOM(todos) {
    const todoList = document.getElementById('todo-list');
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        todoList.appendChild(listItem);
    });
}
