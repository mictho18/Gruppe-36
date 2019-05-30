// Open / close idea board
$(document).ready(function(){
    $(".idea-board-btn").click(function(){
      $(".idea-window").toggle();
    });
  });

// Create draggable idea element
$(function() {
    $('.new-idea-btn').on("click", function(){
        var newDiv = $('<div class="idea-content" contentEditable="true"></div>');
    $(".idea-container").append(newDiv);
    $( ".idea-content" ).draggable();
    });
});

