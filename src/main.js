function add() {
    var app = document.getElementById('todo-list');
    var p = document.createElement('div');
    var taskname = document.getElementById('task-name');
    var value = taskname === null || taskname === void 0 ? void 0 : taskname.value;
    p.innerHTML = '<div class="todo-item"><input type="radio" name="task"/><label for="task">' + value + '</label><a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/></a></div>';
    app === null || app === void 0 ? void 0 : app.appendChild(p);
    console.log(value);
    saveLocal();
}
function saveLocal() {
    /*const app = document.getElementById('todo-list');
    localStorage.setItem("Tasks",app)*/
}
var deleteTask = function (e) {
    e.parentElement.remove();
};
