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

const inputTask = document.getElementById("input-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

let list = [];

function localStorageto() {
    localStorage.setItem("tasks", JSON.stringify(list))
}
//若干理解が浅い感じが否めない
function localStoragefrom(){
    const saved = localStorage.getItem("tasks");
    if (saved) {
        const parsed = JSON.parse(saved);
        list = parsed.map(obj => new Task(obj.title, obj.completed));
    }
}

function render() {
    taskList.innerHTML = "";


    list.forEach(task => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const doneButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        span.textContent = task.describe();

        //以下のif文はcssで見た目を変えるためにクラスをつけている。
        if (task.completed) {
            span.classList.add("completed");
        }

        doneButton.textContent = "完了";
        //基本的にclassを与えているのはcssで装飾するようだなぁと考えている。
        doneButton.classList.add("done-button");
        doneButton.disabled = task.completed;

        deleteButton.textContent = "削除";
        deleteButton.classList.add("delete-button");
        //render()の中でrender()って反復して無限に続いていくのではと考えている。
        doneButton.addEventListener("click",() => {
            task.complete();
            localStorageto();
            render();
        })
        //これの意味わかんない
        deleteButton.addEventListener("click", () => {
            list.splice(index, 1);
            saveToLocalStorage();
            render();
          });
      

        li.appendChild(span);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    })
}
addButton.addEventListener("click", () => {
    const title = inputTask.value.trim();
    if (title) {
      const newTask = new Task(title);
      list.push(newTask);
      inputTask.value = "";

      //ここが怪しい、理解しているかどうか
      localStorageto();
      render();
    }
  });
  
  // 最初に保存されたデータを読み込む
  localStoragefrom();
  render();

  //自分でlocalstorageできるかと言われるとタイミングがわからんなみたいなところはある
  