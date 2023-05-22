document.addEventListener("DOMContentLoaded", function () {
    var addBtn = document.getElementById("add_btn");
    addBtn.addEventListener("click", createTask);
    var restoreBtn = document.getElementById("restore_btn");
    restoreBtn.addEventListener("click", restoreData);
    //restoreData();
});

const  createTask = () => {
    var taskName = document.getElementById("task-name").value;
    var div = document.createElement("div");
    createHtmlCode(div, taskName);
}

const createHtmlCode = (div, taskName) => {
    div.innerHTML = '<div class="todo-item" id="added-task"><input type="radio"/><label for="task">' + taskName + '</label><a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/></a></div>';
    appendList(div);
}

const  appendList = (div) => {
    var app = document.getElementById("added-tasks");
    app.appendChild(div);
    updateLocalStorage();
}

const  saveLocal = () => {
    var app = document.getElementById("added-tasks");
    var text = app.innerHTML;
    var old = localStorage.getItem("tasks");
    if (old === null)
        old = "";
    localStorage.setItem("tasks", old + text);
}

const  restoreData = () => {
    var app = document.getElementById("added-tasks");
    var localStorageData = localStorage.getItem("tasks");
    app.innerHTML = localStorageData;
}

const  deleteTask = (e) => {
    e.parentElement.remove();
    updateLocalStorage();
}

const updateLocalStorage = ()=> {
    localStorage.clear();
    saveLocal();
}
