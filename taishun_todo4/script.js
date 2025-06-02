//今回のテーマとしたはinnerHTML＝””とリストの関係、JSで保存している部分とHTMLのみかけの部分について意識しながらプログラムを書いていきたい。
class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }

    complete() {
        this.completed = true;
    }

    describe() {
        return `${this.title}${this.completed ? "完了" : "未完了"}`;
    }
}

const inputTask = document.getElementById("input-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const doneButton = document.getElementsByClassName("done-button");
let list = [];

//この方法は一見「非効率」そうに見えますが、実は非常にシンプルで信頼性が高いです。foreachで毎回作成するやりかた。
function render(){
    taskList.innerHTML =""
    
    list.forEach(smalltask => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        button.textContent = "完了";
        span.textContent = smalltask.describe();
        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);

        button.addEventListener("click", () => {
            smalltask.complete();
            button.disabled = true;
            smalltask.describe();
            taskList.innerHTML = "";
            span.textContent = smalltask.describe();
            li.appendChild(span);
            li.appendChild(button);
            taskList.appendChild(li);

        })
        
    
    })
    
}

addButton.addEventListener("click", ()=> {
    const inputed = inputTask.value.trim();
    const newTask = new Task(inputed);
    list.push(newTask);
    
    render();
})



