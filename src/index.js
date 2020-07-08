const add_task = document.querySelectorAll('form input')[1]

document.addEventListener("DOMContentLoaded", () => {
  add_task.addEventListener("click", function (event) {

    displayTask();
    event.preventDefault();
  });

});

function displayTask() {
  let list = document.querySelector('ul#tasks')
  let task = document.createElement("li");
  list.appendChild(task);
  task.textContent = document.querySelectorAll('form input')[0].value;
}
