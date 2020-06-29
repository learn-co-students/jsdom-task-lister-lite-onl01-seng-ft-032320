let tasks = document.querySelector("#tasks");
let text = document.querySelector("#new-task-description");
let form = document.querySelector("#create-task-form");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", function (e) {
    let li = document.createElement("li");
    tasks.appendChild(li);

    li.textContent = text.value;
    e.preventDefault();
  });
});
