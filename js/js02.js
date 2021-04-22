window.onload = function() {
    scroll_effect();

    $(window).scroll(function() {
        scroll_effect();
    });

    function scroll_effect() {
        $('.fadein').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('scrollin');
            }
        });
    }
};

$(function() {
    $('.humburger-btn').on('click',
        function() {
            $(this).toggleClass('active');
            $('h1').toggle();
            $('.gnav').toggleClass('slide-in');
            $('.nav-menu').toggleClass('active');
            $('body').toggleClass('noscrol');
    });
});

$(function() {
    $('.gr').on('click',
        function() {
            // $('.gnav').removeAttr('class');
            $('.humburger-btn').removeClass('active');
            $('.nav-menu').removeClass('active');
            $('body').removeClass('noscrol');
        });
});

