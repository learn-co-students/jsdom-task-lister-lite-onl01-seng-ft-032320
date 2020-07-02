document.addEventListener("DOMContentLoaded", () => {
    let ul = document.getElementById("tasks");
    let text = document.getElementById("new-task-description");
    document.querySelectorAll('input')[1].addEventListener("click", function(e) {
        let li = document.createElement('li');
        li.innerHTML = text.value;
        ul.appendChild(li);

        e.preventDefault();
    }, false);
});
