class Task {
    constructor(title, completed=false) {
        this.title = title;
        this.completed = completed;
    }

    complete() {
        this.completed=true;
    }

    describe() {
        return `${this.title}${this.completed ? "完了" : "未完了"}`
    }
}

const inputTask = document.getElementById("input-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

let list = [];

function savetolocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(list))
}

function loadfromlocalStorage() {
    const saved = localStorage.getItem("tasks");

    if (saved) {
        const parsed = JSON.parse(saved);
        list = parsed.map(obj => new Task (obj.title, obj.completed));
    }
}

function render() {
    taskList.innerHTML = "";

    list.forEach((task, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const donebutton = document.createElement("button");
        const deletebutton = document.createElement("button");

        span.textContent = task.describe();
        donebutton.textContent = "完了";
        deletebutton.textContent = "消去";

        //完了した時に見た目を変えたいのでclassを与えていく
        if (task.completed){
            span.classList.add("completed");
        }
        donebutton.classList.add("done-button");
        donebutton.classList.add("delete-button");


        donebutton.disabled = task.completed;

        donebutton.addEventListener("click", () => {
            task.complete();
            savetolocalStorage();
            render();
        })

        //forEachで全てのボタンをひとつづつ作る中でどのボタンに対してもindexを設けていてそのindexを持つボタンに対して処理を追加しているので一つに定まるのではないかと考えている

        deletebutton.addEventListener("click", () => {
            list.splice(index, 1);
            savetolocalStorage();
            render();
        })


        li.appendChild(span);
        li.appendChild(donebutton);
        li.appendChild(deletebutton);
        taskList.appendChild(li);
    })


    
}

addButton.addEventListener("click", () => {
    const title = inputTask.value.trim();
    if (title) {
      const newTask = new Task(title);
      list.push(newTask);
      inputTask.value = "";
      savetolocalStorage();
      render();
    }
  });
  

loadfromlocalStorage();
render();