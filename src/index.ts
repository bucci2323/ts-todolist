import { v4 as uuidV4 } from "uuid";
// console.log(uuidV4())


type TASK = 
{ id:string,
   title :string,
    completed: boolean,
     createdAt: Date}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector("#new-task-form") as HTMLFormElement | null
const input= document.querySelector<HTMLInputElement>("#new-task-title")


form?.addEventListener("submit", e =>{
  e.preventDefault()
  
  if(input?.value == "" || input?.value == null) return

  const newTask = {
    id:uuidV4(),
    title: input.value ,
    completed: false,
    createdAt: new Date(),

  }

addListItem(newTask)
})

function addListItem(task:TASK) {
  const item = document.createElement("li")

}