document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const textBox = document.querySelector('#new-task-description');
  const tasks = document.querySelector('#tasks');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    li.innerText = textBox.value;
    tasks.append(li);
    e.target.reset();
  });
});
