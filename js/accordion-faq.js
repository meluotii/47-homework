$(document).ready(function () {
    $('.block-question').click(function () {
        $('.block-question__minus').css({ 'display': 'none' });
        $('.block-question__plus').css({ 'display': 'block' });
        if ($(this).hasClass('active')) {
            $('.block-question').removeClass('active');
            $(this).removeClass('active');
            $(this).children('.block-question__plus').css({ 'display': 'block' });
            $(this).children('.block-question__minus').css({ 'display': 'none' });
            $('.block-answer').not($(this).next()).slideUp();
            $(this).next('.block-answer').slideToggle();
        } else {
            $('.block-question').removeClass('active');
            $(this).addClass('active');
            $(this).children('.block-question__minus').css({ 'display': 'block' });
            $(this).children('.block-question__plus').css({ 'display': 'none' });
            $('.block-answer').not($(this).next()).slideUp();
            $(this).next('.block-answer').slideToggle();
        }
    });
});