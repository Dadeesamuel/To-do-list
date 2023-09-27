// Old Function
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


// Dlaw


// function toDoList() {

//     this.dailytasks = {};
//     // this.Dates = {}
//     // this.times = {}
//     this.currentid = 0;
// }

// toDoList.prototype.addDaily = function(daily){

//     daily.id = this.assignid();
//     this.dailytasks[daily.id] = daily;

// }

// toDoList.prototype.assignid = function(){
//        this.currentid ++;
//        return this.currentid
// }


// AddressBook.prototype.findDaily = function(id) {
//     if (this.dailytasks[id] != undefined) {
//       return this.dailytasks[id];
//     }
//     return false;
//   };
  
//   AddressBook.prototype.deleteDaily = function(id) {
//     if (this.dailytasks[id] === undefined) {
//       return false;
//     }
//     delete this.dailytasks[id];
//     return true;
//   };

// function Dailytask(dailytask, date, time) {
//     this.dailytask = dailytask;
//     this.date = date;
//     this.time = time;


// }

// Dailytask.prototype.taskDetail = function() {
//     return this.dailytask + " " + this.date + " " + this.time
// }


//Sam
// Business Logic for Task ---------
function Task() {
    this.lists = {};
    this.currentId = 0;
  }

  Task.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  Task.prototype.addList = function(list) {
    list.id = this.assignId();
    this.lists[list.id] = list;
  };

  
Task.prototype.findlist = function(id) {
    if (this.lists[id] != undefined) {
      return this.lists[id];
    }
    return false;
  };
  
  Task.prototype.deleteList = function(id) {
    if (this.lists[id] === undefined) {
      return false;
    }
    delete this.lists[id];
    return true;
  };
  // Business Logic for List ---------
function Lists(title, time, description) {
    this.title = title;
    this.time = time;
    this.description = description;
  }
  Lists.prototype.taskTime = function () {
    return this.title + "     " + this.time;
  };

  

  // User Interface Logic ---------
let task = new Task();
function attachContactListeners() {
    $("ul#todo-list").on("click", "li", function() {
      showContact(this.id);     // <--- This is new!
    });
  }
  
$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    const inputtedTask = $("input#task").val();
    const inputtedDate = $("input#date").val();
    const inputtedTime = $("input#time").val();
    let newList = new Lists(inputtedTask, inputtedDate, inputtedTime);

    task.addList(newList);
    console.log(task.lists);date

    
  });
});