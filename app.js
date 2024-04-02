document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            return;
        }
        addTodo(todoText);
        todoInput.value = '';
    });

    function addTodo(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});
