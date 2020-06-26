document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  let taskDescription = document.getElementById('new-task-description').value;
  let submitButton = document.querySelectorAll('input')[1];

  taskForm.addEventListener('submit', createTask);
  
});

//This creates the task
let createTask = e => {e.preventDefault();
  let taskDescription = document.getElementById('new-task-description').value;
  let newTask = document.createElement('li');

  newTask.innerText = taskDescription;
  addTask(newTask);
}
//This adds the task to the list
let addTask  = t => {
  document.getElementById('tasks').appendChild(t);
}
