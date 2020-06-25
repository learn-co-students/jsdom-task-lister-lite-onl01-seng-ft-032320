document.addEventListener("DOMContentLoaded", () => {
  const tasksContainer = document.querySelector('#tasks')

  const taskForm = document.getElementById('create-task-form')

  taskForm.addEventListener('submit', () => {
    event.preventDefault()
    console.log("The button was clicked!")
    console.log(event)
    const userInputField = event.target.querySelector("#new-task-description")
    const userInput = userInputField.value 
    const liTag = document.createElement('li')
    liTag.textContent = userInput
    tasksContainer.appendChild(liTag)
    userInputField.value = ""
  })
});
