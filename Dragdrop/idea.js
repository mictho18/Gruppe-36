// Open / close idea board
$(document).ready(function(){
    $('#idea-board-btn').click(function(){
      $('#idea-window').toggle();
    });
  });

// Create draggable idea element
$(function() {
    $('#new-idea-btn').on("click", function(){
        var newDiv = $('<div class="idea-content" contentEditable="true"></div>');
    $(".idea-container").append(newDiv);
    $( ".idea-content" ).draggable();
    $(".idea-content").bind("keydown", function(event) {
      var target = $(event.target);
      c = event.keyCode;
      
      if(c === 13 || c === 27) {
          $(".idea-content").blur();
          // Workaround for webkit's bug
          window.getSelection().removeAllRanges();
      }
    
    });
    });
});
