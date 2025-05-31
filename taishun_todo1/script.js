document.addEventListener("DOMContentLoaded", () => {
    class Task {
        constructor(title, completed=false) {
            this.title = title;
            this.completed = completed;
        }
    
        complete() {
            this.completed = true;
        }
    
        describe(){
            //return this.title = `${title} [this.completed ? "完了" : "未完了"]`;
            //というように書いてしまった。元々はreturnすらなかった。まずreturnしなければ何も返ってこないことを認識する。で三項演算子は${}　の間に書くということを忘れないように。
            return `${this.title} [${this.completed ? "完了" : "未完了"}]`;
            
        }
     }
    
    
    const textInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");
    //const li = document.createElement("li");
    //クラスを表示するために毎回liを作成する必要があるのでfor文に入れる必要がある
    
    let list = [];
    //ボタンクリック時に呼び出したい関数を入れて置かないと
    addButton.addEventListener("click", () => {
        
    
        //new入れ忘れている
        //textInputはdom要素なので.valueで値を取得する必要がある
    
        const newTask = new Task(textInput.value);
    
        //appendChild() は DOM 要素の子要素を追加するメソッドであり、配列には使えません。
        //配列には .push() を使います。
        
    
        list.push(newTask);
        render();
    })
    
    function load() {
        localStorage.setItem("tasks", JSON.stringify(list));
    }
    
    function take() {
        localStorage.getItem("tasks");
    }
    
    //const finallist = list.forEach(smalllist, () => {
        //li.textContent = smalllist;
        //上記のようなゴミみたいなforEach文を書いている構文ミス
    function render() {
        
        list.forEach((smalllist) => {
            const li = document.createElement("li");
            li.textContent = smalllist.describe();
            taskList.appendChild(li);

        })
        
    }
 }) ;  
