window.onload = function() {
    scroll_effect();

    $(window).scroll(function(){
        scroll_effect();
    });

    function scroll_effect(){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('scrollin');
            }
        });
    }
};

$(function(){
    $('.navbar-toggler').on('click',
        function() {
            $(this).toggleClass('active');
        });
});

$(function(){
    $('.un-line').on('click', 
    function(){
        $('body').removeClass('modal-open');
        $('body').removeAttr('style');
        $('.modal-backdrop').remove();
        $('.modal').removeClass('show');
        $('.modal').removeAttr('style');
    });
    
});
