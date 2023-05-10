function add():void{
    const app = document.getElementById('todo-list');
    const p = document.createElement('div');
    const taskname = document.getElementById('task-name') as HTMLInputElement | null;
    const value = taskname?.value;
    p.innerHTML = '<div class="todo-item"><input type="radio" name="task"/><label for="task">' + value + '</label><a onClick="deleteTask(this)"><img src="images/images.png" class="trash-ico" width="15px"/></a></div>';
    app?.appendChild(p);
    console.log(value);
    saveLocal();
    
}
function saveLocal(): void{

    /*const app = document.getElementById('todo-list');
    localStorage.setItem("Tasks",app)*/
}

let deleteTask = (e) => {
    e.parentElement.remove();
};
