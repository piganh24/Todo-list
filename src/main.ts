/*const addBtn = document.getElementById('add_btn');
addBtn?.addEventListener("click", createTask);*/

function createTask(){
    const div = document.createElement("div");
    const app = document.getElementById('todo-list');
    const inputValue = document.getElementById('task-name') as HTMLInputElement | null;
    const taskName = inputValue?.value;
    createHtmlCode(div,taskName);
}

function createHtmlCode(div,taskName){
    div.innerHTML = '<div class="todo-item" id="added-task"><input type="radio" name="task"/><label for="task">' + taskName + '</label><a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/></a></div>';
    appendList(div);
}

function appendList(div):void{
    const app = document.getElementById('todo-list');
    app?.appendChild(div);
    saveLocal();
}

function saveLocal(){
    const taskName = document.getElementById('added-task');
    const text =  taskName?.innerHTML;
    localStorage.setItem("tasks",String(text));
    const value = localStorage.getItem('tasks');
}

function restore(){
    /*const app = document.getElementById('todo-list');
    const div = document.createElement("div");
    const text = localStorage.getItem('tasks');
    div.innerHTML = text;
    app?.appendChild(String(text));*/
}

let deleteTask = (e) => {
    e.parentElement.remove();
};

