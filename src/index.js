document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
  form.addEventListener("submit", function(e){
    e.preventDefault();
    createTask();
  })

  function createTask(){
    let task = document.getElementById("new-task-description").value
    let li = document.createElement("li");
  
    console.log(`Adding ${task}...`);
    taskList.appendChild(li).innerText = task;
  }
});