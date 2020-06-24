document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("input[value='Create New Task']").addEventListener("click", function(event) {
    event.preventDefault();
    let task = document.getElementById("new-task-description").value;
    let newTaskElement = document.createElement('li');
    newTaskElement.innerText = task;
    document.getElementById("list").appendChild(newTaskElement);
  })
});
