document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", addTask)
});

function addTask() {
  event.preventDefault()
  console.log("Add Task")
  let ul = document.getElementById("tasks")
  let li = document.createElement('li')
  li.innerText = event.target.querySelector('#new-task-description').value
  ul.appendChild(li)
  event.target.querySelector('#new-task-description').value = ""
}