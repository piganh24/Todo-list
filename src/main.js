/*const addBtn = document.getElementById('add_btn');
addBtn?.addEventListener("click", createTask);*/
function createTask() {
    var div = document.createElement("div");
    var app = document.getElementById('todo-list');
    var inputValue = document.getElementById('task-name');
    var taskName = inputValue === null || inputValue === void 0 ? void 0 : inputValue.value;
    createHtmlCode(div, taskName);
}
function createHtmlCode(div, taskName) {
    div.innerHTML = '<div class="todo-item" id="added-task"><input type="radio" name="task"/><label for="task">' + taskName + '</label><a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/></a></div>';
    appendList(div);
}
function appendList(div) {
    var app = document.getElementById('todo-list');
    app === null || app === void 0 ? void 0 : app.appendChild(div);
    saveLocal();
}
function saveLocal() {
    var taskName = document.getElementById('added-task');
    var text = taskName === null || taskName === void 0 ? void 0 : taskName.innerHTML;
    localStorage.setItem("tasks", String(text));
    var value = localStorage.getItem('tasks');
}
function restore() {
    /*const app = document.getElementById('todo-list');
    const div = document.createElement("div");
    const text = localStorage.getItem('tasks');
    div.innerHTML = text;
    app?.appendChild(String(text));*/
}
var deleteTask = function (e) {
    e.parentElement.remove();
};
