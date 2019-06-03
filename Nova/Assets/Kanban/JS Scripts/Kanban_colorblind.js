// Change color

$('#color-switch :checkbox').change(function () {
    if ($(this).is(':checked')) {
        $('.to-do-column .column-header').css('background', '#ac9d00');
        $('.doing-column .column-header').css('background', '#0666e0');
        $('.done-column .column-header').css('background', '#dfcd06');
        $('.trash-column .column-header').css('background', '#625900');
        $('.delete-button').css('background', '#625900');
    } else {
        $('.to-do-column .column-header').css('background', '#ff872f');   
        $('.doing-column .column-header').css('background', '#13a4d9');
        $('.done-column .column-header').css('background', '#15d072');
        $('.trash-column .column-header').css('background', '#ff4444');
        $('.delete-button').css('background', '#ff4444');
    }
});