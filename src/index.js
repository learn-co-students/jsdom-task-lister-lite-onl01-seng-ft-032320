document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTask);
})

function addTask(e){
    e.preventDefault();
    console.log(e.target.querySelector('#new-task-description').value);
    let ul = document.getElementById("tasks");
    let li = document.createElement('li');
    li.innerText = e.target.querySelector('#new-task-description').value;
    ul.appendChild(li);
    e.target.querySelector('#new-task-description').value = "";
}
