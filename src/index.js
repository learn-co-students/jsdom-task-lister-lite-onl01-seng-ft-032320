document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //grab form
  const taskForm = document.getElementById("create-task-form")
  //add event listeners ---> need to write create function
  if(taskForm) {
    taskForm.addEventListener('submit', createTask)
  }
})
//create function
function createTask() {
  //prevent post request/ page reload
  event.preventDefault();
  document.getElementById("tasks").innerHTML += `
    <li>
    ${document.getElementById("new-task-description").value}
    <button id="delete">X</button>
    </li>
    `
    //attach event listener for removal -------> need to write remove function
    addEventListener('click', removeTask)
    //reset form
    event.target.reset()
};
//remove function
function removeTask() {
  if(event.target.id === "delete") {
    event.target.parentElement.remove()
  } 
   

}
  
  
  
  
  
  // first attempt...  
//  .addEventListener('submit', fillULs)
// function fillULs() {
//     event.preventDefault()
//     document.querySelector('#tasks').innerHTML += `
//         <li>
//         ${document.getElementById('new-task-description').value}
//         <button id="delete">X</button>
//         </li>
//         `
        
//   }

  
//   document.querySelectorAll("#delete").forEach(task => task.addEventListener('click', removeTask))
  
//   function removeTask() {
//     event.target.parentElement.remove()
//   }

// });
