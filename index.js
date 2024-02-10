function addTodo() {
  let todo = document.getElementById("newTasks");
  let todoText = todo.value;

  if (todoText === "") {
    alert("Please enter a task");
  } else {
    let newTasks = document.createElement("div");
    newTasks.className = "taskNew";

    let newCheckBox = document.createElement("div");
    newCheckBox.className = "checkbox";
    let newCheckBoxButton = document.createElement("input");
    newCheckBoxButton.type = "checkbox";
    newCheckBox.appendChild(newCheckBoxButton);
    newTasks.appendChild(newCheckBox);

    let newTaskNameDiv = document.createElement("div");
    newTaskNameDiv.className = "taskName";
    let newTaskName = document.createTextNode(todoText);
    newTaskNameDiv.appendChild(newTaskName);
    newTasks.appendChild(newTaskNameDiv);

    let newDeleteDiv = document.createElement("div");
    newDeleteDiv.className = "delete";
    let newDeleteButton = document.createElement("i");
    newDeleteButton.className = "fa-solid fa-trash";
    newDeleteDiv.appendChild(newDeleteButton);
    newTasks.appendChild(newDeleteDiv);

    newDeleteButton.onclick = function () {
      todoList.remove();

      var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      var index = tasks.indexOf(todoText);
      if (index !== -1) {
        tasks.splice(index, 1);
        saveTasks(tasks);
      }
    };

    let todoList = document.getElementById("todoList");
    todoList.appendChild(newTasks);

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(todoText);
    saveTasks(tasks);

    document.getElementById("newTasks").value = "";
  }
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
