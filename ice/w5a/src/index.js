<<<<<<< HEAD
let element = undefined;
let taskInput;

=======
import Task from "./components/Task/index.js"
let element;
let input;
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
    taskInput = document.getElementById("taskText");
}

function onClick() {
    console.log("clicked!");
<<<<<<< HEAD
    let newTask = document.createElement("div");
    let input = document.createElement("input");
    input.type = "checkbox";
    let span = document.createElement("span");
    span.innerHTML = taskInput.value;
    newTask.appendChild(input)
    newTask.appendChild(span);
    function onChange() {
        console.log(span.innerHTML);
    }
    inpput.addEventListener("change", onChange);
   // newTask.innerHTML = `<input type='checkbox'></input><span> ${taskInput.value} </span>`;
    element.appendChild(newTask);
    
=======
    var newTask = new Task({content:input.value,done:false});
    element.appendChild(newTask.render());
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
}

window.addEventListener("DOMContentLoaded", runOnLoad);