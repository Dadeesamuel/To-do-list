
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") {
        return;
    }
    const taskList = document.getElementById("todo-list");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    document.getElementById("new-task").value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    const taskList = document.getElementById("todo-list");
    taskList.removeChild(taskItem);
}

function clearTasks() {
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = "";
}







function toDoList() {

    this.dailytasks = {};
    // this.Dates = {}
    // this.times = {}
    this.currentid = 0;
}

toDoList.prototype.addDaily = function(daily){

    daily.id = this.assignid();
    this.dailytasks[daily.id] = daily;

}

toDoList.prototype.assignid = function(){
       this.currentid ++;
       return this.currentid
}


AddressBook.prototype.findDaily = function(id) {
    if (this.dailytasks[id] != undefined) {
      return this.dailytasks[id];
    }
    return false;
  };
  
  AddressBook.prototype.deleteDaily = function(id) {
    if (this.dailytasks[id] === undefined) {
      return false;
    }
    delete this.dailytasks[id];
    return true;
  };

function Dailytask(dailytask, date, time) {
    this.dailytask = dailytask;
    this.date = date;
    this.time = time;


}

Dailytask.prototype.taskDetail = function() {
    return this.dailytask + " " + this.date + " " + this.time
}