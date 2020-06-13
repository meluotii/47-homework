$(document).ready(function () {
    document.querySelectorAll('.nav__nav-item').forEach(item => {
        item.addEventListener('click', event => {

            const tab = (event.target.getAttribute('data-tab'));
            event.target.classList.add('active');
            if (tab === 'products' || tab === 'faqs') {
                $('html, body').animate({
                    scrollTop: $(`#${tab}`).offset().top - 100
                }, 1000)
            } else {
                $('html, body').animate({
                    scrollTop: $(`#${tab}`).offset().top
                }, 1000)
            }

        });
    });
});

$(document).ready(function () {
    $('.logo').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('body').offset().top
            })
    });
});

$(document).ready(function () {
    $('.block-intro__arrow').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#properties').offset().top
            })
    });
});

$(document).ready(function () {
    $('.js-tab-trigger').click(function () {
        const id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');
        $('.js-tab-content').hide();
        content.fadeIn().css({ 'display': 'flex' });


        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');

    });
});

$(document).ready(function () {
    $('.js-menu-toggler').click(function () {
        $(this).toggleClass('toggler--open');
        console.log($(this));

        $('.js-menu').fadeToggle();
        $('.block-nav__header').toggleClass('toggled')

    });
});