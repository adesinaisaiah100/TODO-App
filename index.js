let Display = document.getElementById("main_div");
let displayBtn  = document.getElementById("main_btn");
let Tasks = document.getElementById("div_ipt");
let Main = document.getElementById("body_main")
let addTask = document.getElementById("div_btn");
let taskContainer = document.getElementsByClassName("task-container")

displayBtn.addEventListener("click", () => {
Display.style.display= "block";
console.log("i was clicked")
})

addTask.addEventListener("click", ()=>{
    let taskValue = Tasks.value;
    if(taskValue){
        let taskElementCon = document.createElement("button");
        let taskElement = document.createElement("p");
        taskElementCon.className  = "task-container";
        taskElement.textContent= taskValue;
        // taskElementCon.style.border = "1px solid black";
        // taskElementCon.style.width = "100%";
        // taskElementCon.style.height = "50px"
        
        

        let completedBtn = document.createElement("button");
        completedBtn.textContent = "";
        completedBtn.classList.add("fas", "fa-check");

        let cancelBtn = document.createElement("button");
        cancelBtn.textContent = "";
        cancelBtn.classList.add("fas", "fa-trash-alt");

        
        taskElementCon.appendChild(completedBtn);
        taskElementCon.appendChild(taskElement);
        taskElementCon.appendChild(cancelBtn);
        Main.appendChild(taskElementCon);
        Tasks.value="";
        console.log(taskValue);

        completedBtn.addEventListener("click", ()=> {
                taskElement.style.textDecoration = "line-through"
        })

        cancelBtn.addEventListener("click", ()=> {
            Main.removeChild(taskElementCon);
    })

    }
   
})

























































// addTask.addEventListener("click", () => {
//     let taskValue = Tasks.value;
//     if (taskValue) {
//         let taskElement = document.createElement("div");
//         taskElement.textContent = taskValue;
//         Display.appendChild(taskElement);
//         Tasks.value = ""; // Clear the input field after adding the task
//     }
// });