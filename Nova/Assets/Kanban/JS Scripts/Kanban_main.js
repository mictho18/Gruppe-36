var saveTask = [];
var inputTask = document.getElementById("taskText").value;
var idCounter = 0;

dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
]);
removeOnSpill: false
  .on("drag", function(el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function(el) {
    el.className += "ex-moved";
  })
  .on("over", function(el, container) {
    container.className += "ex-over";
  })
  .on("out", function(el, container) {
    container.className.replace("ex-over", "");
  });

    
/* Vanilla JS to add a new task */
  function addTask() {
  /* Get task text from input  */
  var inputTask = document.getElementById("taskText").value;
  if(document.getElementById("taskText").value === ""){
    alert("Please add a task")
    }
    else {
  /* Add task to the 'To Do' column  */
  document.getElementById("to-do").innerHTML +=
    "<li class='task'><p>" + inputTask + "</p><span id='editspan'><button id='modalBtn'><i class='fas fa-pencil-alt'></i></button></span></li>";
  /* Clear task text from input after adding task */
  document.getElementById("taskText").value = "";

  var findId = document.querySelector('#to-do');
  for (var i = 0, task = findId.children.length; i < task; i++);

  var objectSave = {
    ID: i,
    Task: inputTask
  }
  saveTask.push(objectSave);
  }
}


// Delete tasks in trash column
function promptDelete() {
  var trashDelete = prompt("Delete items in trash? (Yes/No)");
  if (trashDelete == "Yes" || trashDelete == "yes" || trashDelete == "YES") {
    document.getElementById("trash").innerHTML = "";
  } else {
    alert("Nothing was deleted");
  }
}
