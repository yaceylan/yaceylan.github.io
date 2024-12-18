// Elemente selektieren
const form=document.querySelector("todo-form");
const input = document.querySelector("todo-input");
const list = document.querySelector("todo-list");


//Funktion, zum Rendern der Todos in der Liste
function renderTodos() {
    todoList.innerHTML=            // Gibt Zugriff auf HTML-Inhalt innerhalb dieses Elements
    <input type="checkbox">
        <span>${todos}</span>
        <button class="delete-button"<Löschen></button>;
        </input>
//Elemente aus dem DOM  (Formular, Eingabefeld und Liste)
//const weil das Formular, das Eingabefeld und die Liste Elemente, die sich während der Ausführung des Programms nicht ändern sollen
const todoform = document.getElementById("todo-form");
const todoInput = document.getElementById('.todo-input');
const todoList = document.getElementById('todo-list');

// Event Listener für das Formular
todoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
  
    // Leerzeichen entfernen
    const newTodo = todoInput.value.trim();
  
    // Beende die Funktion mit einem return-Statement, wenn das Eingabefeld leer ist
    if (todoInput)=== ''}
      return; 
    }
  
    // Leeres Array für die Todos 
const todos = [];

  // Erstelle ein neues Todo-Objekt
  const newTodo = {
    text: newTodoText,
    completed: false,
    id: Date.now(),
  }

  // Leere das input-Element
  todoInput.value = ''; { 
  }

  // Checkbox
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''}>
      <span style="${todo.completed ? 'text-decoration: line-through' : ''}">${todo.text}</span>
      <button class="delete-btn">Löschen</button>
    `;

    // Event Listener für Checkbox
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos(); 
    });

    // Event Listener für Lösch-Button
    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      todos = todos.filter (todo.id === todo.id)
      li.remove();
      saveTodos();
      renderTodos();
    });
