 var itemContainers = [].slice.call(document.querySelectorAll('.board-column-content'));
 var columnGrids = [];
 var boardGrid;
 
 // Define the column grids to enable drag
 itemContainers.forEach(function (container) {
 
   // Instantiate column grid.
   var grid = new Muuri(container, {
     items: '.board-item',
     layoutDuration: 200,
     layoutEasing: 'ease',
     dragEnabled: true,
     dragSort: function () {
       return columnGrids;
     },
     dragSortInterval: 0,
     dragContainer: document.body,
     dragReleaseDuration: 200,
     dragReleaseEasing: 'ease'
   })

   .on('dragStart', function (item) {
     // Fixed width/height of item
     item.getElement().style.width = item.getWidth() + 'px';
     item.getElement().style.height = item.getHeight() + 'px';
   })

   .on('dragReleaseEnd', function (item) {
     // Remove fixed width/height to readjust
     item.getElement().style.width = '';
     item.getElement().style.height = '';
     // Refresh dimensions
     columnGrids.forEach(function (grid) {
       grid.refreshItems();
     });
   })

   .on('layoutStart', function () {
     // Keep board grid up to date with dimension changes of column grids.
     boardGrid.refreshItems().layout();
   });
 
   // Add column grid reference to column grids array for access later.
   columnGrids.push(grid);
 
 });
 
 function generateBoardItem(item) {
  var itemElem = document.createElement('div');
  var itemTemplate = '' +
      '<div class="board-item">' +
      '<div class="board-item-content">' +
      '<p class="board-title">' + 
      '</div>' +
      '</div>';

  itemElem.innerHTML = itemTemplate;
  return itemElem.firstChild;
}

function addEvent() {
  
  var event = {
    id: 1,
    name: "event"
  }
  
  var item = generateBoardItem(event);
  columnGrids[0].add([item])
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var event = {
    id: 1,
    name: "event"
  }
  
  var item = generateBoardItem(event);
  columnGrids[0].add([item])
  }
  
});

function addTask() {
  /* Get task text from input */
  var inputTask = document.getElementById("myTxt").value;
  /* Add task to the 'To Do' column */
  document.getElementById("todo").innerHTML +=
    "<li class='task'><p>" + inputTask + "</p></li>";
  /* Clear task text from input after adding task */
  document.getElementById("myTxt").value = "";
}

 // Prevent column drag
 boardGrid = new Muuri('.board', {
   dragEnabled: false,
 });

 function add()
{
var mydiv = document. getElementById("board-item-content");
var div = document. createElement("div");
mydiv. appendChild(div);
div. className ="dynamicDiv";
div. innerHTML = "<input type='text' name='mytext[]' value='mytext' />";
}

function createCard(text, listID, index) {
  if(!text || text === '') return false;
  var newCardId = ++_cardCounter;
  var card = document.createElement("div");
  var list = getList({_id: listID});
  card.draggable = true;
  card.dataset.id = newCardId;
  card.dataset.listId = listID;
  card.id = 'todo_'+newCardId;
  card.className = 'card';
  card.innerHTML = text.trim();
  var todo = {
    _id: newCardId,
    listID: listID,
    text: text,
    dom: card,
    index: index || list.cards+1 // Relative to list
  }};
