// script.js（JavaScript）
class Task {
    constructor(title, completed = false) {
      this.title = title;
      this.completed = completed;
    }
  
    complete() {
      this.completed = true;
    }
  
    description() {
      return `${this.title} [${this.completed ? "完了" : "未完了"}]`;
    }
  }
  
  const tasklistElement = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  
  let tasks = [];
  
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      const taskArray = JSON.parse(stored);
      tasks = taskArray.map(t => new Task(t.title, t.completed));
    }
  }
  
  function renderTasks() {
    tasklistElement.innerHTML = "";
  
    tasks.forEach(task => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = task.description();
  
      if (task.completed) {
        span.classList.add("completed");
      }
  
      const button = document.createElement("button");
      button.textContent = "完了";
      button.disabled = task.completed;
  
      button.addEventListener("click", () => {
        task.complete();
        saveTasks();
        renderTasks();
      });
  
      li.appendChild(span);
      li.appendChild(button);
      tasklistElement.appendChild(li);
    });
  }
  
  // タスク追加のイベントリスナーは一度だけ設定
  addButton.addEventListener("click", () => {
    const title = taskInput.value.trim();
    if (title) {
      const newTask = new Task(title);
      tasks.push(newTask);
      taskInput.value = "";
      saveTasks();
      renderTasks();
    }
  });
  
  // 初回読み込み時
  loadTasks();
  renderTasks();
  