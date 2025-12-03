// this file contains an alternative working approach
// for saving and loading to/from local storage
// you can replace the functions here with the existing ones in 'app.js'
// without changing anything else in the file
// and it will work
// although, the approach used in 'app.js' is more clean

function saveAllTodosIntoLocalStorage() {
    for (let i = 0; i < todosArr.length; i++) {
        window.localStorage.setItem('todo_' + i, todosArr[i].outerHTML);
    }
    window.localStorage.setItem('todosLength', todosArr.length);
}

function loadAllTodosFromLocalStorage() {
    const arr = [];
    const length = window.localStorage.getItem('todosLength') || 0;

    for (let i = 0; i < length; i++) {
        const stringElement = window.localStorage.getItem('todo_' + i);
        arr.push(domParser.parseFromString(stringElement, "text/html").body.children[0]);
    }

    return arr;
}