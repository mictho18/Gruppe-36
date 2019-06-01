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
