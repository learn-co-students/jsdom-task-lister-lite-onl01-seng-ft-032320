

// function message(message) {
//   let li = document.createElement('li');
//   let ul = document.querySelector('ul');
//   ul.appendChild(li)
//   return li.innerHTML = message;
// }

document.querySelector('form#create-task-form').addEventListener('submit', function(event) {
  let li = document.createElement('li')
  let ul = document.querySelector('ul')

  ul.appendChild(li)
  event.preventDefault();
  return li.textContent = document.querySelector('input#new-task-description').value
});
