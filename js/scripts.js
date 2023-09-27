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

  
Task.prototype.findList = function(id) {
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
function Lists(task, date, time) {
    this.task =task;
    this.date = date;
    this.time = time;
  }
  Lists.prototype.taskTime = function () {
    return this.task + " " + this.date + " " + this.time;
  };

  

  // User Interface Logic ---------
let task = new Task();
function displayListDetails(taskToDisplay) {
    let todoList = $("ul#todo-list");
    let htmlForListInfo = "";
    Object.keys(taskToDisplay.lists).forEach(function(key) {
      const list = taskToDisplay.findList(key);
      htmlForListInfo += "<li id=" + list.id + ">" + list.task + " " + list.date + " " + list.time +"</li>";
    });
    todoList.html(htmlForListInfo);
  }
  
  function showList(listId) {
    const list = task.findList(listId);
    $("#show-contact").show();
    $(".task").html(list.task );
    $(".date").html(list.date);
    $(".time").html(list.time);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
  }


function attachListListeners() {
    $("ul#todo-list").on("click", "li", function() {
      showList(this.id);     // <--- This is new!
    });
    $("#buttons").on("click", ".deleteButton", function() {
        task.deleteList(this.id);
        $("#show-list").hide();
        displayListDetails(task);
      });
    
  }
  
$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    const inputtedTask = $("input#task").val();
    const inputtedDate = $("input#date").val();
    const inputtedTime = $("input#time").val();

    $("input#task").val("");
    $("input#date").val("");
    $("input#time").val("");

    let newList = new Lists(inputtedTask, inputtedDate, inputtedTime);

    task.addList(newList);
    displayListDetails(task);
    console.log(task.lists);

    
  });
});