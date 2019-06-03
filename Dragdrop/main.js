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

function addTask() {
  /* Get task text from input */
  var inputTask = document.getElementById("taskText").value;
  if (document.getElementById("taskText").value === "") {
    document.getElementById("add").disabled = true;
  } else {
    /* Add task to the 'To Do' column */
    document.getElementById("to-do").innerHTML +=
      "<li class='task'><p>" + inputTask + "</p></li>";
    /* Clear task text from input after adding task */
    document.getElementById("taskText").value = "";
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
