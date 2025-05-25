class Task {

    constructor(title) {
        this.title = title;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    description() {
        return `${this.title}(${this.completed ? "完了":"未完了"})`;
    }
}

const tasks = [
    new Task("宿題をする"),
    new Task("買い物に行く"),
    new Task("運動する")
];

const tasklist = document.getElementById("todo-list");

tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.description();

    const button = document.createElement("button");
    button.textContent = "完了";

    button.addEventListener("click",() => {
    task.complete()
    span.textContent = task.description(); // 表示更新
    span.classList.add("completed");    // 見た目に完了スタイル適用
    button.disabled = true;   
    })






    li.appendChild(span);
    li.appendChild(button);
    tasklist.appendChild(li);

});






