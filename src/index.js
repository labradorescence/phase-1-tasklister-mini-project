document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form#create-task-form")

  form.addEventListener("submit", submitTodo )
});

const submitTodo = (event) => {
  event.preventDefault()
  // console.log(event)
  // debugger

  //save the input text in a variable
  const newTodoText = event.target.description.value
  
  //select the task DOM object
  const tasks = document.querySelector("#tasks")

  //create a new li element
  const newLi = document.createElement("li")

  //insert the new todo text inside of li element
  newLi.innerHTML = newTodoText

  //append new li onto tasks object
  tasks.appendChild(newLi)


  ////////DELETE/////////
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = '❌'
  newLi.append(deleteBtn)


  /////DELETE FUNCTION/////
  deleteBtn.addEventListener("click", (e) => {
    // const removingLi = e.target.parentNode
    // removingLi.remove()
    newLi.remove()
  })
  
  //reset 
  event.target.reset()
}