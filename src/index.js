document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const inputField = document.querySelector('#new-task-description')
    const createTaskBtn = document.querySelector('#submitBtn')
    const taskList = document.querySelector("#tasks")
    createTaskBtn.addEventListener("click", (e) => {
        e.preventDefault()

        let task = document.createElement("LI")
        let deleteBtn = document.createElement("button")
        deleteBtn.value = "Submit"
        deleteBtn.innerHTML = "X"

        task.className = "list-item"
        task.innerHTML = inputField.value

        task.appendChild(deleteBtn)
        taskList.appendChild(task)



        // deletes the li
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault()

            deleteBtn.parentElement.remove()
        })

        // edits the task
        task.addEventListener("click", (e) => {
            if (e.target == deleteBtn) {
                return
            } else {
                tempInput = prompt("What's the new name?")
                task.innerHTML = tempInput
                task.appendChild(deleteBtn)
            }

        })
        inputField.value = ''
    })
});