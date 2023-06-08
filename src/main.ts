const innerHTMLListCode = '<a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/>';
window.onload = restoreData;

document.addEventListener("DOMContentLoaded", function () {

    var addBtn = document.getElementById("add_btn");
    addBtn?.addEventListener("click", createTask);

    var restoreBtn = document.getElementById("restore_btn");
    restoreBtn?.addEventListener("click", restoreData);
});

function restoreData() {
    var localStorageData = localStorage.getItem("tasks");
    var arr = localStorageData?.split(' ');

    arr?.forEach(function (taskName) {
        var div = document.createElement("div");
        div.setAttribute("class","todo-item");

        div.innerHTML = taskName + innerHTMLListCode;

        var app = document.getElementById("added-tasks");
        app?.appendChild(div);
    });
}

var createTask = function () {
    var inputValue = document.getElementById('task-name') as HTMLInputElement | null;
    var taskName = inputValue?.value;

    var alredyExist = false;
    var localStorageData = localStorage.getItem("tasks");
    var arr = localStorageData?.split(' ');

    if(taskName == "" || taskName == null){
        alert("Пуста назва таски!");
    }
    else{
    arr?.forEach(element => {
        if(element == taskName){
            alredyExist = true;
            alert("Таска з такою назвою вже існує!");
        }
    });
    if(alredyExist == false){
        var div = document.createElement("div");
        div.setAttribute("class","todo-item");
        div.innerHTML = taskName + innerHTMLListCode;
        var app = document.getElementById("added-tasks");
        app?.appendChild(div);
        saveLocalStorage(taskName);
    }
}
};

var saveLocalStorage = function (taskName) {
    var oldTasks = localStorage.getItem("tasks");
    if (oldTasks == null) {
        localStorage.setItem("tasks", taskName);
    }
    else {
        localStorage.setItem("tasks", oldTasks + " " + taskName);
    }
};

var updateLocalStorage = function (arr) {
    localStorage.clear();
    arr.forEach(taskName => {
        var oldTasks = localStorage.getItem("tasks");
        if (localStorage.length == 0) {
            localStorage.setItem("tasks", taskName);
        }
        else {
            localStorage.setItem("tasks", oldTasks + " " + taskName);
        }
    });
};

var deleteTask = function (e) {
    var localStorageData = localStorage.getItem("tasks");
    var arr = localStorageData?.split(' ');
    var isDeleted = false;

    arr?.forEach(task => {
    if(isDeleted == true){}
    else{
    if (task == e.parentNode.textContent) {
      arr?.splice(arr.indexOf(task),1);
      e.parentElement.remove();
      updateLocalStorage(arr);
      isDeleted = true;
    }
    }
  });
};