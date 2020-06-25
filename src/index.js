document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input');
  let tasks = document.getElementById('tasks');
  submit[1].addEventListener('click', function(event) { 
      let taskDescription = document.getElementById('new-task-description').value;
      event.preventDefault();
      let newListItem = document.createElement('li');
      tasks.appendChild(newListItem);
      newListItem.textContent = taskDescription
    }, 
    false);




});

