class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed
    }

    complete() {
        this.completed = true;
    }

    describe() {
        return `${this.title}${this.completed ? "完了" : "未完了"}`;
    }
}
//漠然とこんな感じかなーみたいな部分はあるが作り続けているうちに解消すると見込んで深く追及しないでおく。

//jsでは定義が先、要素が後というルールがあるらしい。

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

let list = [];

addButton.addEventListener("click", () => {
    taskList.innerHTML = ""
    const newTask = new Task(taskInput.value);
    //配列にはpushを用いる
    list.push(newTask);
    render();

})


//trueになった時にボタンの見た目を変えることを念頭においていなかったためこの状態で頓挫
//次はボタンのクリック時に見た目を変えることを念頭においてやる。そしてボタンとタスクを横並びになるようにしたいと考えている。
function render() {
    list.forEach((smalllist) => {
        const li = document.createElement("li");
        const elementButton = document.createElement("button")
        elementButton.textContent = "完了"
        elementButton.addEventListener("click", () => {
            smalllist.complete()

        })
        li.textContent = smalllist.describe();
        taskList.appendChild(li);
        taskList.appendChild(elementButton);
    })
}
