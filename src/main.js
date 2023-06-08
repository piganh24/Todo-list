var innerHTMLListCode = '<a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/>';
window.onload = restoreData;
document.addEventListener("DOMContentLoaded", function () {
    var addBtn = document.getElementById("add_btn");
    addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", createTask);
    var restoreBtn = document.getElementById("restore_btn");
    restoreBtn === null || restoreBtn === void 0 ? void 0 : restoreBtn.addEventListener("click", restoreData);
});
function restoreData() {
    var localStorageData = localStorage.getItem("tasks");
    var arr = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData.split(' ');
    arr === null || arr === void 0 ? void 0 : arr.forEach(function (taskName) {
        var div = document.createElement("div");
        div.setAttribute("class", "todo-item");
        div.innerHTML = taskName + innerHTMLListCode;
        var app = document.getElementById("added-tasks");
        app === null || app === void 0 ? void 0 : app.appendChild(div);
    });
}
var createTask = function () {
    var inputValue = document.getElementById('task-name');
    var taskName = inputValue === null || inputValue === void 0 ? void 0 : inputValue.value;
    var alredyExist = false;
    var localStorageData = localStorage.getItem("tasks");
    var arr = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData.split(' ');
    if (taskName == "" || taskName == null) {
        alert("Пуста назва таски!");
    }
    else {
        arr === null || arr === void 0 ? void 0 : arr.forEach(function (element) {
            if (element == taskName) {
                alredyExist = true;
                alert("Таска з такою назвою вже існує!");
            }
        });
        if (alredyExist == false) {
            var div = document.createElement("div");
            div.setAttribute("class", "todo-item");
            div.innerHTML = taskName + innerHTMLListCode;
            var app = document.getElementById("added-tasks");
            app === null || app === void 0 ? void 0 : app.appendChild(div);
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
    arr.forEach(function (taskName) {
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
    var arr = localStorageData === null || localStorageData === void 0 ? void 0 : localStorageData.split(' ');
    var isDeleted = false;
    arr === null || arr === void 0 ? void 0 : arr.forEach(function (task) {
        if (isDeleted == true) { }
        else {
            if (task == e.parentNode.textContent) {
                arr === null || arr === void 0 ? void 0 : arr.splice(arr.indexOf(task), 1);
                e.parentElement.remove();
                updateLocalStorage(arr);
                isDeleted = true;
            }
        }
    });
};
