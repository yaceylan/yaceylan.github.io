// Elemente selektieren
const form = document.querySelector('todo-form');
const input = document.querySelector('todo-input');
const list = document.querySelector('todo-list');

//Funktion, damit Benutzeroberfläche synchron mit internen Zustand der Anwendung ist
function renderTodos(todos) {
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML= `
        <input type="checkbox" class="todo-checkbox">
            <span>${todo.text}</span>
            <button class="delete-btn">Löschen</button>
            </input> {
            constructor(parameters) {
                
            }
        }
        
        `

    });
}

