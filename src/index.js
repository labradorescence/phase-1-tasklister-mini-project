document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //1. Select the form
  const form = document.querySelector("#create-task-form")

  //2. Grab the input text
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    //option 1
    // const inputDesc = document.querySelector("#new-task-description").value

    //option 2
    const inputDesc = event.target.description.value
    console.log(inputDesc)

  //3. Select the task DOM obj
    const tasks = document.querySelector("#tasks")
    console.log(tasks)

  //4. create li element for the new task
     const newLi = document.createElement("li")

  //5. insert the new todo inside of the li element
    newLi.innerHTML = inputDesc
    console.log(newLi)
  //6. append the new li onto the task obj
    tasks.appendChild(newLi)


  ///////////DELETE////////////    
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = '❌'
  newLi.append(deleteBtn)

  deleteBtn.addEventListener("click", (e) => {
    // const removingLi = e.target.parentNode
    // console.log(removingLi)
    // removingLi.remove()

    newLi.remove()
   })

    
  //7. reset
  event.target.reset()

  })







});
