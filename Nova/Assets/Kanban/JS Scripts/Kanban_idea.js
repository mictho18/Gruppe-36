// Open / close idea board
$(document).ready(function() {
  $("#idea-board-btn").click(function() {
    $("#idea-window").toggle();

    var $this = $(this);
    $this.toggleClass("idea-board-btn");
    if ($this.hasClass("idea-board-btn")) {
      $this.text("Close Board");
    } else {
      $this.text("Idea Board");
    }
  });
});

// Create draggable idea element
$(function() {
  $("#new-idea-btn").on("click", function() {
    var newDiv = $(
      '<div class="idea-content" contentEditable="true" data-text="Enter new idea . . ."></div>'
    );
    $(".idea-container").append(newDiv);
    $(".idea-content").draggable();
    $(".idea-content").bind("keydown", function(event) {
      var target = $(event.target);
      c = event.keyCode;
      // Enter og esc to drop focus
      if (c === 13 || c === 27) {
        $(".idea-content").blur();
      }
    });
  });
});

// Delete item on trash can drop
$(function() {
  $(".idea-content").draggable();

  $("#idea-trash").droppable({
    drop: function(event, ui) {
      $(ui.draggable).remove();
    }
  });
});
