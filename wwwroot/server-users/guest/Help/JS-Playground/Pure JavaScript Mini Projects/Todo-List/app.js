// Objects
const domParser = new DOMParser();
const todosArr = loadAllTodosFromLocalStorage();

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', populateTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCheck);
todoFilter.addEventListener('change', showFilteredTodos);


// Front-end Functions

// shows any todos that were saved in the local storage
function populateTodos() {
    for (let element of todosArr) {
        todoList.appendChild(element);
    }
    showFilteredTodos();
}

function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    if (todoInput.value.trim() == '')
        return;

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoListItem = document.createElement('li');
    todoListItem.innerHTML = todoInput.value;
    todoListItem.classList.add('todo-item');

    todoInput.value = '';

    const todoCheckedButton = document.createElement('button');
    todoCheckedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoCheckedButton.classList.add('complete-btn');

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDeleteButton.classList.add('delete-btn');

    todoDiv.appendChild(todoListItem);
    todoDiv.appendChild(todoCheckedButton);
    todoDiv.appendChild(todoDeleteButton);

    todoList.appendChild(todoDiv);
    showFilteredTodos();

    // store the newly created todo item
    saveTodo(todoDiv);
}

function deleteOrCheck(event) {
    const element = event.target;
    if (element.classList[0] == 'delete-btn') {
        // delete the parent div (the whole todo div)
        // adding transformation
        element.parentElement.classList.add('fall');
        // waiting until the transaction ends then removing the parent div
        element.parentElement.addEventListener('transitionend', function() {
            // delete the todo item
            // from local storage
            element.parentElement.classList.remove('fall');
            deleteTodo(element.parentElement);
            // and from the DOM
            element.parentElement.remove();
        });
    } else if (element.classList[0] == 'complete-btn') {
        // mark as completed
        // const completedColor = 'yellowgreen';
        // const parent = element.parentElement;
        // const currentBackground = parent.style.background;
        // parent.style.background = (currentBackground != completedColor)?
        //                            completedColor : 'white';
        element.parentElement.classList.toggle('completed');
        showFilteredTodos();

        // update the todo item
        updateTodo(element.parentElement);
    }
}

function showFilteredTodos(event) {
    const type = todoFilter.value;
    let elements = todoList.children;

    for (let element of elements) {
        let shouldBeShown = true;
        let hasCompletedClass = element.classList.contains('completed');

        switch (type) {
            case 'completed':
                shouldBeShown = hasCompletedClass;
                break;
            case 'incompleted':
                shouldBeShown = !hasCompletedClass;
        }

        if (shouldBeShown)
            element.classList.remove('hide');
        else
            element.classList.add('hide');
    }

}



// Back-end (Storage) Functions

function saveTodo(todoDiv) {
    todosArr.push(todoDiv);
    saveAllTodosIntoLocalStorage();
}

function deleteTodo(todoDiv) {
    const index = todosArr.indexOf(todoDiv);
    if (index != -1) {
        todosArr.splice(index, 1);
        saveAllTodosIntoLocalStorage();
    }
}

function updateTodo(todoDiv) {
    const index = todosArr.indexOf(todoDiv);
    todosArr[index] = todoDiv;
    saveAllTodosIntoLocalStorage();
}

function saveAllTodosIntoLocalStorage() {
    const savedArr = [];

    for (let todoItem of todosArr) {
        savedArr.push(todoItem.outerHTML);
    }

    window.localStorage.setItem('todos', JSON.stringify(savedArr));
}

function loadAllTodosFromLocalStorage() {
    const loadedArr = JSON.parse(window.localStorage.getItem('todos'));
    const parsedArr = [];

    for (let todoItem of loadedArr) {
        parsedArr.push(domParser.parseFromString(todoItem, "text/html").body.children[0]);
    }

    return parsedArr;
}