$(function() {
    var header = $(".header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('header').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('header');
        }
    });
});