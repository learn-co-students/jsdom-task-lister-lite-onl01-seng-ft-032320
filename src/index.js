document.addEventListener('DOMContentLoaded', () => {
  
  //grab all the necessary DOM elements
  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

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

    // delete task
  // taskUl.addEventListener("click", (e) => {
  //   if (e.target.nodeName === "BUTTON") {
  //     taskList.deleteTask(e.target.dataset.description);
  //     renderApp();
  //   }
  // });

  class Task {
    constructor(description) {
      this.description = description;
    }
    render() {
      return `
        <li>
          ${this.description}
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
    // deleteTask(description) {
    //   this.tasks = this.tasks.filter((task) => task.description !== description);
    // }
  }
  const taskList = new TaskList();
});