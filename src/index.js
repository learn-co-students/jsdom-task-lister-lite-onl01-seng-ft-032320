document.addEventListener("DOMContentLoaded", () => {  
  
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", function (e) {
    let li = document.createElement("li");
    let data = document.getElementById("new-task-description").value
    let textnode = document.createTextNode(data)
    li.appendChild(textnode)
    document.getElementById("tasks").appendChild(li)
        e.preventDefault();
  });
});


