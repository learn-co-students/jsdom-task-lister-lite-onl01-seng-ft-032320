document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelectory('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();

let inputTag = document.querySelector("input#new-task-description");
let inputValue = inputTag.Value;

let newLi = document.createElement('li');
newLi.innterText = inputValue; 

let ulTag = document.querySelector('ul#tasks');
ulTag.append(newLi); 
inputTag.value = '';

    })
});