// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector('form');

//   form.addEventListener("submit", function(event) {
//       event.preventDefault();
  
//   let inputTag = document.querySelector("input#new-task-description");
//   let inputValue = inputTag.Value;
  
//   let newLi = document.createElement('li');
//   newLi.innterText = inputValue; 
  
//   let ulTag = document.querySelector('ul#tasks');
//   ulTag.append(newLi); 
//   inputTag.value = '';
  
//       })
// });

class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // initialize taskList class
  const taskList = new TaskList();
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  //attach event listeners

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});