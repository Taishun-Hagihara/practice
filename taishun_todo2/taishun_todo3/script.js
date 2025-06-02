class Task {
    constructor(title, completed=false) {
        this.title = title;
        this.completed = completed;
    }

    complete() {
        this.completed = true;
    }

    describe() {
        return `${this.title}${this.completed ? "完了" : "未完了"}`
    }
}

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

let list = [];

addButton.addEventListener("click", () => {
    const newtitle = taskInput.value.trim();
    const newTask = new Task(newtitle);
    list.push(newTask);
    generate();
})

function generate() {
    
    
    const span = document.createElement("span");
    list.forEach(smalltask => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        li.textContent = smalltask.title
        span.textContent = smalltask.describe();
        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);

    })
}

