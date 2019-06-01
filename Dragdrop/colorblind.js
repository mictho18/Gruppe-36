// Change color

$('#change-color-btn :checkbox').change(function () {
    if ($(this).is(':checked')) {
        $('.to-do-column .column-header').css('background', 'yellow');
        $('.doing-column .column-header').css('background', 'pink');
        $('.done-column .column-header').css('background', 'orange');
        $('.trash-column .column-header').css('background', 'black');
        $('.delete-button').css('background', 'blue');
    } else {
        $('.to-do-column .column-header').css('background', '#ff872f');   
        $('.doing-column .column-header').css('background', '#13a4d9');
        $('.done-column .column-header').css('background', '#15d072');
        $('.trash-column .column-header').css('background', '#ff4444');
        $('.delete-button').css('background', '#fd4141');
    }
});
