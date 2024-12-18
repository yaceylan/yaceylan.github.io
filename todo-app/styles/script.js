// Elemente selektieren
const form = document.getElementById("todo-form");
const input = document.getElementById("new-task");
const button = document.getElementById("submit");

let toDos = []

button.addEventListener ("click", ()=>{
  const submit = document.createElement("li")
  submit.textContent = "Hinzufügen"

  form.addEventListener ("todo-form", ()=>{
    event.preventDefault();
  })
 

let input = newTask.value.trim();
})
