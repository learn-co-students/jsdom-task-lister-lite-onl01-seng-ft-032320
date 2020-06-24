document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let submit = document.querySelector('form input[type="submit"]')
  let task = document.querySelector(" input#new-task-description")
  
  
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    // finding the element where the tasks are 
    let tasks = document.querySelector("#tasks");
    // creating a list node to add the new task
    let taskElement = document.createElement("li");
    // providing the text that will be display
    taskElement.innerHTML = task.value
    // attaching the new li node to the ul list 
    tasks.appendChild(taskElement)
    
  });
  
});

