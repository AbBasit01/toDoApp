function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim().length > 0 && isNaN(Number(taskInput.value.replace(/ /g,"")))) {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="removeTask(this)">x</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
function removeTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}

function removeAll(){
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = '';
}